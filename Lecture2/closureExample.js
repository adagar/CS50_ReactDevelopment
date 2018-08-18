function MakeHelloFunction() {
	const message = 'hello!';

	function SayHello() {
		console.log(message);
	}
	return SayHello;
}
const SayHello = MakeHelloFunction();
console.log(SayHello.toString());
SayHello();