/**
 * 프로그래밍 언어는 해당 언어의 함수들이 다른 변수처럼 다루어질 때 일급 함수를 가진다고 합니다.
 * 예를 들어, 일급 함수를 가진 언어에서 함수는 다른 함수들에 전달인자로 제공되고,
 * 다른 함수에 의해 반환될 수 있으며, 변수에 값으로서 할당될 수 있습니다.
 *
 * - 함수가 변수처럼 다뤄진다는 것은 아래와 같습니다.
 *   - 함수를 특정 변수에 할당할 수 있습니다.
 *   - 함수 호출의 인자로 함수를 넘길 수 있습니다.
 *   - 함수를 반환할 수 있습니다.
 *
 */
const sayHello = () => {
    return "Hello, ";
};

const greeting = (helloMessage: any, name: string) => {
    console.log(helloMessage() + name);
};

greeting(sayHello, "JavaScript!");
