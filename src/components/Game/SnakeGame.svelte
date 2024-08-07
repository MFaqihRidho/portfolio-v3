<script>
	import { onMount, onDestroy } from 'svelte';
	onMount(() => {
		reset();
		document.addEventListener('keydown', listenForKeyboard);
	});
	// onDestroy(() => {
	// 	document.removeEventListener('keydown', listenForKeyboard);
	// });
	const canvasSize = 240;
	const canvasHeight = 360;
	const snakeSize = 10;
	const GAME = {
		INIT: 'INITIALIZING',
		READY: 'GAME_READY',
		SETUP: 'GAME_SETUP',
		PLAYING: 'GAME_PLAYING',
		OVER: 'GAME_OVER'
	};
	const DIRECTION = {
		RIGHT: 'RIGHT',
		LEFT: 'LEFT',
		UP: 'UP',
		DOWN: 'DOWN'
	};
	const keys = {
		arrowup: DIRECTION.UP,
		arrowright: DIRECTION.RIGHT,
		arrowdown: DIRECTION.DOWN,
		arrowleft: DIRECTION.LEFT,
		w: DIRECTION.UP,
		a: DIRECTION.LEFT,
		s: DIRECTION.DOWN,
		d: DIRECTION.RIGHT
	};
	const acceptableKeys = Object.keys(keys);
	function listenForKeyboard(e) {
		const key = e.key.toLowerCase();
		if (acceptableKeys.includes(key)) {
			changeDirection(keys[key]);
		}
	}

	let gameState = GAME.INIT;
	let canvas;
	let ctx;
	let speedMs;
	let direction;
	let bodyPositions = [];
	let fruit;
	$: score = (bodyPositions.length - 4) * 10;
	$: highScore = score > highScore ? score : highScore || 0;
	$: {
		if (highScore !== 0) {
			localStorage.setItem('snakeHighScore', highScore);
		}
	}
	onMount(() => {
		const hs = localStorage.getItem('snakeHighScore');
		if (hs) {
			highScore = hs;
		}
	});

	function reset() {
		if (ctx) {
			ctx.clearRect(0, 0, canvasSize, canvasHeight);
		}
		speedMs = 200;
		direction = DIRECTION.RIGHT;
		bodyPositions = [
			{ x: 50, y: 50 },
			{ x: 40, y: 50 },
			{ x: 30, y: 50 }
		];
		gameState = GAME.READY;
		fruit = undefined;
	}
	function setupGame() {
		canvas = document.getElementById('canvas');
		ctx = canvas.getContext('2d');
		gameState = GAME.PLAYING;
		drawSnake();
	}
	function drawSnake() {
		// calculate next position for element
		bodyPositions = bodyPositions.map(({ x, y }, i) => {
			const isHead = i === 0;
			let nextX;
			let nextY;

			switch (direction) {
				case DIRECTION.RIGHT:
					nextX = isHead ? x + snakeSize : bodyPositions[i - 1].x;
					nextY = isHead ? y : bodyPositions[i - 1].y;
					break;
				case DIRECTION.LEFT:
					nextX = isHead ? x - snakeSize : bodyPositions[i - 1].x;
					nextY = isHead ? y : bodyPositions[i - 1].y;
					break;
				case DIRECTION.DOWN:
					nextX = isHead ? x : bodyPositions[i - 1].x;
					nextY = isHead ? y + snakeSize : bodyPositions[i - 1].y;
					break;
				case DIRECTION.UP:
				default:
					nextX = isHead ? x : bodyPositions[i - 1].x;
					nextY = isHead ? y - snakeSize : bodyPositions[i - 1].y;
					break;
			}
			// if next values break bounds of canvas or bites self, make game over
			let bitesSelf = false;
			if (isHead) {
				const bitten = bodyPositions.find((part) => part.x === nextX && part.y === nextY);
				bitesSelf = !!bitten;
			}
			if (
				nextX >= canvasSize ||
				nextX <= 0 - snakeSize ||
				nextY >= canvasHeight ||
				nextY <= 0 - snakeSize ||
				bitesSelf
			) {
				gameState = GAME.OVER;
			}

			// if head touches fruit; remove it and add new body part
			if (isHead && fruit && nextX === fruit.x && nextY === fruit.y) {
				fruit = undefined;
			}

			return {
				x: nextX,
				y: nextY
			};
		});
		if (!fruit) {
			const currentTail = bodyPositions[bodyPositions.length - 1];
			bodyPositions = [...bodyPositions, { ...currentTail }];
			speedMs *= 0.95;
		}
		// if no fruit; create it!
		createAndDrawFruit();

		ctx.fillStyle = '#43D9AD';
		bodyPositions.forEach(({ x, y }) => {
			ctx.fillRect(x, y, snakeSize, snakeSize);
		});

		// recursivley call, but check if boundaries are reached and end game
		setTimeout(() => {
			if (gameState !== GAME.OVER) {
				// reset canvas then draw
				ctx.clearRect(0, 0, canvasSize, canvasHeight);
				drawSnake();
			}
		}, speedMs);
	}
	function generateFruitCoords() {
		const x = Math.floor(Math.random() * (canvasSize / 10)) * 10;
		const y = Math.floor(Math.random() * (canvasHeight / 10)) * 10;

		const conflictsWithSnake = bodyPositions.find((part) => part.x === x && part.y === y);
		if (!!conflictsWithSnake) {
			return generateFruitCoords();
		}
		return { x, y };
	}
	function createAndDrawFruit() {
		if (!fruit) {
			fruit = generateFruitCoords();
		}
		ctx.fillStyle = '#4D5BCE';
		ctx.fillRect(fruit.x, fruit.y, snakeSize, snakeSize);
	}
	function changeDirection(nextDirection) {
		switch (nextDirection) {
			case DIRECTION.LEFT:
				if (direction !== DIRECTION.RIGHT) {
					direction = nextDirection;
				}
				break;
			case DIRECTION.RIGHT:
				if (direction !== DIRECTION.LEFT) {
					direction = nextDirection;
				}
				break;
			case DIRECTION.UP:
				if (direction !== DIRECTION.DOWN) {
					direction = nextDirection;
				}
				break;
			case DIRECTION.DOWN:
				if (direction !== DIRECTION.UP) {
					direction = nextDirection;
				}
				break;
		}
	}
</script>

<div class="flex lg:flex-row flex-col lg:items-start items-center gap-5">
	<div class="canvasContainer relative">
		<canvas id="canvas" width={canvasSize} height={canvasHeight}></canvas>
		{#if gameState === GAME.OVER || gameState === GAME.READY}
			<div class="absolute bottom-16 w-full text-center items-center left-1/2 -translate-x-1/2">
				{#if gameState === GAME.OVER}
					<div class="mb-1 flex justify-center py-2 bg-[#011627] w-full">
						<p class="text-[#43D9AD] text-xl">GAME OVER!</p>
					</div>
				{/if}
				<button
					on:click={() => {
						reset();
						setupGame();
					}}
				>
					{#if gameState === GAME.READY}
						<div class="bg-border-active px-3 py-2.5 rounded-lg">start-game</div>
					{:else}
						<p class="text-text-primary">start-again</p>
					{/if}
				</button>
			</div>
		{/if}
	</div>

	<div class="w-full">
		<div class="bg-[#011423]/20 flex flex-col gap-2 p-3 rounded-lg w-full">
			<div>
				<p class="text-text-active text-sm">// use keyboard arrows</p>
				<p class="text-text-active text-sm">// or this arrows to play</p>
			</div>
			<div class="grid grid-cols-3 gap-1">
				<div></div>
				<button
					type="button"
					on:click={() => changeDirection(DIRECTION.UP)}
					class="bg-bg-primary rounded-lg flex items-center justify-center"
				>
					<i class="ri-arrow-drop-up-fill text-white text-2xl"></i>
				</button>
				<div></div>
				<button
					on:click={() => changeDirection(DIRECTION.LEFT)}
					type="button"
					class="bg-bg-primary rounded-lg flex items-center justify-center"
				>
					<i class="ri-arrow-drop-left-fill text-white text-2xl"></i>
				</button>
				<button
					on:click={() => changeDirection(DIRECTION.DOWN)}
					type="button"
					class="bg-bg-primary rounded-lg flex items-center justify-center"
				>
					<i class="ri-arrow-drop-down-fill text-white text-2xl"></i>
				</button>
				<button
					on:click={() => changeDirection(DIRECTION.RIGHT)}
					type="button"
					class="bg-bg-primary rounded-lg flex items-center justify-center"
				>
					<i class="ri-arrow-drop-right-fill text-white text-2xl"></i>
				</button>
			</div>
		</div>
		<div class="mt-3">
			<p class="text-text-active text-sm">
				// score: {bodyPositions.length !== 3 ? (score > 0 ? score : '0') : '0'}
			</p>

			<p class="text-text-active text-sm">
				// highest score: {highScore}
			</p>
		</div>
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 240px;
		margin: 0 auto;
	}
	header {
		width: 100%;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.buttons {
		padding: 16px 0;
		display: grid;
		grid-template-columns: 33% 33% 33%;
		grid-gap: 8px;
	}
	.buttons button {
		width: 50px;
		height: 50px;
	}
	#canvas {
		background-color: #042330;
		border-radius: 8px;
	}
	.canvasContainer {
		z-index: 99999;
		position: relative;
	}
</style>
