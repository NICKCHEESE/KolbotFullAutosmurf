/**
*	@filename	TCPIPHostExit
*	@author		NICKCHEESE
*	@desc		Have followers Save & Exit before leader(host) quits game
*/

function TCPIPClientExit() {
	
	delay((1, 5) * 1000);
	
	quit(true);
	
	return true;
}