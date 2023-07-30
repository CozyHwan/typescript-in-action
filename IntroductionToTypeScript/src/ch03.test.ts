/**
 * 타입스크립트 객체란?
 * 타입스크립트 객체는 연관 배열이다.
 * 몇 개의 값을 모은 데이터 입니다.
 */
const obj = {
  foo: 123,
  bar: 'Hello, world!',
}

describe('obj 객체', () => {
  test('프로퍼티 값이 올바르면 리턴을 한다.', () => {
    expect(obj.foo).toBe(123)
    expect(obj.bar).toBe('Hello, world!')
  })
})

