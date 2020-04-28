import solution from './pad';

describe('solution', () => {
	it('should pass case 0', () => {
		const A = [1, -2, 0, 9, -1, -2];
		expect(solution(A)).toEqual(8);
	});
	it('should pass case 1', () => {
		const A = [1, -2];
		expect(solution(A)).toEqual(-1);
	});
	it('should pass case 3', () => {
		const A = [1, -2, 4, -3, -9, 8, 11, 54, -60];
		expect(solution(A)).toEqual(18);
	});
});
