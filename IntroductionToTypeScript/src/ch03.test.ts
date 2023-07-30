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
// const name = input ? input : '이름 없음' // 조건 연산자를 사용 할 수 있다.
const user = {
//   name: name,
  age: 20, // 프로퍼티명: 식
}

describe('user 객체', () => {
  test('프로퍼티 값이 올바르면 리턴을 한다.', () => {
    expect(user.age).toBe(20)
  })
})

/**
 * 객체 리터널은 프로퍼티명을 문자열로 사용할 수 있다.
 * 식별자로 사용할 수 없는 문자열도 프로퍼티명으로 만들 수 있다.
 * 프로퍼티명은 정적 프로퍼티명과 동적 프로퍼티명이 있다.
 * 프로퍼티명을 동적으로 정하기 위한 구믄은 계산된 프로퍼티명이라고 한다.
 * 이 구문은 프로퍼티명 부분에 [식]을 사용합니다.
 */
const proName = 'proName'
const str = {
    "foo": 123,
    "foo bar": -500,
    "↑↓↑↓": "",
    1: 'one',
    2.05 : 'two point o five',
    [proName]: 123
}
describe('str 객체', () => {
  test('프로퍼티 값이 올바르면 리턴을 한다.', () => {
    expect(str.foo).toBe(123)
    expect(str['foo bar']).toBe(-500)
    expect(str['1']).toBe('one')
    expect(str['2.05']).toBe('two point o five')
    expect(str.proName).toBe(123)
  })
})
