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
  foo: 123,
  'foo bar': -500,
  '↑↓↑↓': '',
  1: 'one',
  2.05: 'two point o five',
  [proName]: 123,
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

/**
 * 프로퍼티 접근은 객체의 프로퍼티의 값을 가져오거나 프로퍼티 값을 대입하는 기능을 의미합니다.
 * 구문은 식.프로퍼티명 형식으로 접근이 가능합니다.
 * 동적 프로퍼티명은 식1[식2] 형태의 구문입니다.
 *
 *
 */
const user1 = {
  name: 'uhyo',
  age: 25,
}

console.log(user1.age) // 25

user1.age = 26

console.log(user1.age) // 26

console.log(user1['name'])

/**
 * 타입스크립트는 객체가 암묵적으로 복사가 되지 않아 여러 변수에 같은 객체가 들어가는 경우가 있다.
 * A객체에 다른 변수에 대입을 해도 프로퍼티 값은 동일하다.
 * 참조 된 변수가 프로퍼티 값을 변경한다면 A객체의 프로퍼티 값에도 영향이 간다.
 */
const foo = { num: 1234 }
console.log('foo: ' + foo.num) // foo = 1234

const bar = foo // foo 객체 참조
console.log('bar: ' + bar.num) // bar = 1234

const sep = foo // foo 객체 참조
console.log('sep: ' + sep.num) // sep = 1234

sep.num = 0

console.log(
  'foo property change by sep property: ' + foo.num,
) // foo = 0

const bar1 = { ...foo }
console.log('bar1: ' + bar.num) // 객체의 명시적 복사는 전개 구문으로 객체를 복사한다.

bar1.num = 1
console.log(
  'foo property chaged by bar1 property: ' + foo.num,
)

/**
 * 선택적 프로퍼티는 객체 내 프로퍼티가 있든 없든 상관 없는 것을 의미합니다.
 * 프로퍼티명 뒤에 ?를 붙입니다.
 * baz?: number | undefined는 유니온 타입니다.
 */
type MyObj1 = {
  foo: boolean
  bar: boolean
  baz?: number // baz?: number | undefined
  readonly sep: number
}

const obj1: MyObj1 = {
  foo: true,
  bar: false,
  sep: 3456,
}

const obj2: MyObj1 = {
  foo: false,
  bar: true,
  baz: 1234,
  sep: 3456,
}

describe('MyObj1 객체', () => {
  test('프로퍼티 값이 객체의 타입에 의도에 맞게 리턴한다.', () => {
    expect(obj1.foo).toEqual(true)
    expect(obj1.bar).toEqual(false)
    expect(obj1.baz).toEqual(undefined)
    expect(obj1.sep).toEqual(3456)
  })
})

describe('MyObj2 객체', () => {
  test('프로퍼티 값이 객체의 타입에 의도에 맞게 리턴한다.', () => {
    expect(obj2.foo).toEqual(false)
    expect(obj2.bar).toEqual(true)
    expect(obj2.baz).toEqual(1234)
    expect(obj2.sep).toEqual(3456)
  })
})

// describe('MyObj2 객체', () => {
//   test('sep 프로퍼티 값ㅡ 객체의 타입에 의도에 맞게 리턴한다.', () => {
//     obj2.sep = 0 // Cannot assign to 'sep' because it is a read-only property
//     expect(obj1.sep).toEqual(0)
//   })
// })

const member = {
  id : '1234',
  name: ['하나','둘', '셋']
}

console.log(member.name)

type FooBar = {
  foo: string,
  bar: number,
}

type FooBarBaz = {
  foo: string,
  bar: number,
  baz: boolean,
}

const obj3 : FooBarBaz = {
  foo: 'string',
  bar: 1234,
  baz: true
}

type User<T> = {
  name: string
  child: T
}

/**
 * 타입 인수를 가진 타입 선언하기
 * 타입 인수란? 타입명 뒤에 타입 인수를 <>로 감쌉니다.
 * 타입 인수를 가진 타입을 제네릭 타입이라고 합니다.
 */
type Family<User, Child> = {
  mother: User
  father: User
  child: Child
}

const u: User<number> = {
  name: 'user',
  child: 1234,
}

describe('u 객체', () => {
  test('타입인수가 올바르게 지정이 되면 리턴한다', () => {
    expect(u.child).toBe(1234)
  })
})

