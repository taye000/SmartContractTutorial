    //SPDX-License-Identifier: MIT

pragma solidity ^0.4.17;

contract helloWorld {
    string public message;

    function inbox(string initialMessage) public {
        message = initialMessage;
    }
    function setMessage(string newMessage) public {
        message = newMessage;
    }

} 