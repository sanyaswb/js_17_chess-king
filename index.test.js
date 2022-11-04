const king = require("./index");

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof king(5, 4, 4, 5);

	expect(type).toBe('boolean');
});

test('Тест. x1: 5, y1: 4, x2: 4, y2: 5', () => {
	const res = king(5, 4, 4, 5);

	expect(res).toBe(true);
});

test('Тест. x1: 2, y1: 7, x2: 8, y2: 1', () => {
	const res = king(2, 7, 8, 1);

	expect(res).toBe(false);
});

test('Тест. x1: 8, y1: 8, x2: 7, y2: 4', () => {
	const res = king(8, 8, 7, 4);

	expect(res).toBe(false);
});

test('Тест. x1: 5, y1: 3, x2: 4, y2: 2', () => {
	const res = king(5, 3, 4, 2);

	expect(res).toBe(true);
});

test('Тест. x1: 5, y1: 6, x2: 8, y2: 8', () => {
	const res = king(5, 6, 5, 8);

	expect(res).toBe(false);
});

test('Тест. x1: 6, y1: 2, x2: 7, y2: 1', () => {
	const res = king(6, 2, 7, 1);

	expect(res).toBe(true);
});

test('Тест. x1: 1, y1: 1, x2: 1, y2: 2', () => {
	const res = king(1, 1, 1, 2);

	expect(res).toBe(true);
});