// Leap Year Checker
function checkLeapYear() {
    const year = document.getElementById("year").value;
    const result = isLeapYear(year);
    document.getElementById("leap-year-result").innerText = result;
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Ticket Pricing
function checkTicketPrice() {
    const age = document.getElementById("age").value;
    const result = ticketPrice(age);
    document.getElementById("ticket-price-result").innerText = result;
}

function ticketPrice(age) {
    if (age <= 12) {
        return "Ticket Price: $10 (Child)";
    } else if (age >= 13 && age <= 17) {
        return "Ticket Price: $15 (Teenager)";
    } else {
        return "Ticket Price: $20 (Adult)";
    }
}

// Fibonacci Sequence
function generateFibonacci() {
    const num = document.getElementById("fib-num").value;
    const result = fibonacci(num);
    document.getElementById("fibonacci-result").innerText = `Fibonacci(${num}) = ${result}`;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Palindrome Checker
function checkPalindrome() {
    const str = document.getElementById("palindrome-str").value;
    const result = isPalindrome(str);
    document.getElementById("palindrome-result").innerText = result ? "It's a palindrome!" : "It's not a palindrome.";
}

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    function checkPalindromeRecursive(left, right) {
        if (left >= right) return true;
        if (cleanStr[left] !== cleanStr[right]) return false;
        return checkPalindromeRecursive(left + 1, right - 1);
    }
    return checkPalindromeRecursive(0, cleanStr.length - 1);
}
