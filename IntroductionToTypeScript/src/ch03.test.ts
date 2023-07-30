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

/**
 * 객체 리터널은 식의 일종이다.
 * 프로퍼티는 프로퍼티명: 식 형식의 구문으로 정의한다.
 */
const name = input ? input : '이름 없음' // 조건 연산자를 사용 할 수 있다.
const user = {
  name: name,
  age: 20, // 프로퍼티명: 식
}

describe('user 객체', () => {
  test('프로퍼티 값이 올바르면 리턴을 한다.', () => {
    expect(user.age).toBe(20)
  })
})
