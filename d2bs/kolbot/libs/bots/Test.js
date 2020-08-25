function Test() {
	print("ÿc4Test ÿc0:: ÿc8TESTING");

	var c;

	function KeyDown(key) {
		if (key === 45) {
			c = true;
		}
	}

	addEventListener("keydown", KeyDown);

	while (true) {
		if (c) {
			try {
				test();
			} catch (qq) {
				print('ÿc4Test ÿc0:: ÿc1Failed');
				print(qq + " " + qq.fileName + " " + qq.lineNumber);
			}

			c = false;
		}

		delay(10);
	}
}

function test() {
	print("ÿc4Test ÿc0:: ÿc2Test");

	print("ÿc4Test ÿc0:: ÿc2Done");
}
