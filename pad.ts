export default function solution(A: Array<number>): number {
	const squareOptimum = Array<number>(A.length).fill(NaN);
	const firstSquare = A[0];
	squareOptimum[0] = firstSquare;
	squareOptimum.forEach((baseValue, squareIndex) => {
		const moveRange = Math.min(A.length - squareIndex - 1, 6);
		for (let moveDist = 1; moveDist <= moveRange; moveDist += 1) {
			const moveToIndex = squareIndex + moveDist;
			const nextVal = baseValue + A[moveToIndex];
			if (Number.isNaN(squareOptimum[moveToIndex]) || squareOptimum[moveToIndex] < nextVal) {
				squareOptimum[moveToIndex] = nextVal;
			}
		}
	});
	return squareOptimum[squareOptimum.length - 1];
}
