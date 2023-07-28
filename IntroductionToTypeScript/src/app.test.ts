import repeatHello from './app'

describe('repeatHello 함수', () => {
  test('상수를 입력하면 문자열을 반환한다.', () => {
    expect(repeatHello(1)).toBe('hello')
  })
})
