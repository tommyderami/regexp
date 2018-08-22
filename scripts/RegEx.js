/***

    REGULAR EXPRESSION
    Emily Rautenberg

    A Regular Expression, or regex, is a pattern that can be used to decribe a specific subset of text.

    RegEx use various special character codes to denote sets of characters and shortcuts to generate a searchable pattern.

    This tutorial will specifically cover how to utilize regular expressions in JavaScript.

***/


/* Renders answer in the HTML */
function render(id, func) {
    document.getElementById(id).innerHTML = func;
}
function run(id, func) {
    document.getElementById(id).innerHTML = func();
}
/* Clear contenets in the HTML */
function clearOut(id) {
    document.getElementById(id).innerHTML = "";
}
function show(id) {
    document.getElementById(id).style.display = "";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}

/* Creating a new RegEx */
function createRegEx() {
    // RegEx can be created using the JavaScript object "RegExp"
    var regLong = new RegExp("pattern", "g"); // search for 'pattern' with the 'g' flag, or global

    // RegEx can also be created using '/' to start and end the pattern, similarly to how strings use quotes or backticks
    var regShort1 = /pattern/; // search for 'pattern' without flags
    var regShort2 = /pattern/g; // search for 'pattern' with the 'g' flag, or global
    
    // Find the pattern in the following string
    var str = "Let's find the word 'pattern' in this string.";
    
    var position = str.search(regLong); // .search returns the position of the match (-1 if no match)
    
    var result = "CREATING A REGULAR EXPRESSION\n"
        + "\nRegEx: " + regShort2
        + "\nStr: \"" + str + "\"\n"
        + "\n" + regLong + "  ->  " + position;
    return result;
}

/* Methods of RegEx and Strings */
function methods() {
    // There are 6 Javascript methods we will be using throughout this tutorial:
    //   regex.test - returns true or false if the regular expression finds matches in a string
    //   str.search - returns the position of the first match (-1 if no match)
    //   str.match - returns array of matches (null if no matches)
    //   str.split - separates the string on a given delimiter
    //   str.replace - searches a string and replaces all instances of requested string with new string
    //   regex.exec - returns an array containing the match (element 0) and the groups generated (elements 1-9)
    
    var reg = /pattern/g;
    
    var str = "Let's find the pattern 'pattern' in this string.";
    
    var test = reg.test(str);
    var position = str.search(reg);
    var match = str.match(reg);
    var split = str.split(reg);
    var replace = str.replace(reg, "PATTERN");
    var exec = reg.exec(str);
    
    var result = "METHODS OF REGEX AND STRINGS\n"
        + "\nRegEx: " + reg
        + "\nStr: \"" + str + "\"\n"
        + "\nreg.test(str)  ->  " + test
        + "\nstr.search(reg)  ->  " + position
        + "\nstr.match(reg)  ->  " + match
        + "\nstr.split(reg)  ->  " + split
        + "\nstr.replace(reg, \"PATTERN\")  ->  " + replace
        + "\nreg.exec(str)  ->  " + exec;
    return result;
}

/* Flags */
function flags() {
    // There are 5 Javascript-specific flags  ->  i, g, m, u, and y
    //   i - case-insensitive (/pattern/ will return results for "pattern" or "PATTERN" or "pATteRn")
    //   g - global (search for all matches in a string instead of just one)
    //   m - multiline (searches across multiple lines even when the ^ or $, or start and end of text, characters are used)
    //   u - unicode support (important for characters encoded with more than 2 bytes--like emojis)
    //   y - enables sticky mode (the search returns only a match found at the .lastIndex attribute)
    
    var regNoCase = /pattern/i; // search for 'pattern' regardless of case
    var regGlobal = /pattern/g; // search for 'pattern' across entire string
    var regNoCaseGlobal = /pattern/ig; // search for 'pattern' regardless of case across entire string
    var regMulti = /pattern$/gm; // search for ending in 'pattern' across all lines regardless of ^ and $ (see Anchors section)
    var regUnicode = /😄/u; // search for characters with multiple code units
    var regSticky = /pattern/y; // search for 'pattern' only at the location of .lastIndex
    
    var str = "Let's search for 'paTtERn' to see how many instances of PATTERN or pattern there are in this string 😄";
    var strMulti = `pattern
    pattern`;
    regSticky.lastIndex = 67;   // position 67 of the str is "pattern there are in this string 😄"
    
    var matchNoCase = str.match(regNoCase);
    var matchGlobal = str.match(regGlobal);
    var matchNoCaseGlobal = str.match(regNoCaseGlobal);
    var matchMulti = strMulti.match(regMulti);
    var matchUnicode = str.match(regUnicode);
    var matchSticky = str.match(regSticky);

    var result = "FLAGS\n"
        + "\nStr: \"" + str + "\""
        + "\nStrMulti: \"" + strMulti + "\"\n"
        + "\n" + regNoCase + "  ->  " + matchNoCase
        + "\n" + regGlobal + "  ->  " + matchGlobal
        + "\n" + regMulti + "  ->  " + matchMulti
        + "\n" + regUnicode + "  ->  " + matchUnicode
        + "\n" + regSticky + "  ->  " + matchSticky;
    return result;
}

/* Anchors: ^, $  */
function anchorchars() {
    // The special characters ^ and $ are called anchors, and match at the beginning and end of text, respectively
    
    var start = /^First/g; // check if "First" is at the beginning of the string
    var end = /Fourth$/g; // check if "Fourth is at the end of the string
    
    var str1 = "First Second Third Fourth Fourth";  // even though Fourth is twice, only the one at the end is a match
    var str2 = "Fourth Fourth Third Second First";
    
    var startTest1 = str1.search(start);
    var endTest1 = str1.search(end);
    var startTest2 = str2.search(start);
    var endTest2 = str2.search(end);
    
    var result = "ANCHORS\n"
        + "\n" + str1
        + "\n" + start + "  ->  " + startTest1
        + "\n" + end + "  ->  " + endTest1
        + "\n\n" + str2
        + "\n" + start + "  ->  " + startTest2
        + "\n" + end + "  ->  " + endTest2;
    return result;
}

/* Sets and Ranges */
function setsranges() {
    // It's possible to query from a set of characters
    var abc = /[abc]/g; // essentially a or b or c
    
    var abcStr = "How many a's, b's, and c's are in this sentence?"
    var abcMatch = abcStr.match(abc);
    var countA = 0, countB = 0, countC = 0;
    for (var i = 0; i < abcMatch.length; i++) {
        if (abcMatch[i] == 'a')
            countA++;
        if (abcMatch[i] == 'b')
            countB++;
        if (abcMatch[i] == 'c')
            countC++;
    }
    
    // You can also create ranges
    var def = /[d-f]/g; // d or e or f
    
    var defStr = "How many d's, e's, and f's are in this sentence?"
    var defMatch = defStr.match(def);
    var countD = 0, countE = 0, countF = 0;
    for (var i = 0; i < defMatch.length; i++) {
        if (defMatch[i] == 'd')
            countD++;
        if (defMatch[i] == 'e')
            countE++;
        if (defMatch[i] == 'f')
            countF++;
    }
    
    var result = "SETS AND RANGES\n"
        + "\nRegEx: " + abc
        + "\nStr: \"" + abcStr + "\"\n"
        + "\n" + "Count a's  ->  " + countA
        + "\n" + "Count b's  ->  " + countB
        + "\n" + "Count c's  ->  " + countC
        + "\n"
        + "\nRegEx: " + def
        + "\nStr: \"" + defStr + "\"\n"
        + "\n" + "Count d's  ->  " + countD
        + "\n" + "Count e's  ->  " + countE
        + "\n" + "Count f's  ->  " + countF;
    return result;
}

/* Character Groups */
function characters() {
    // There are many different character codes that can be used as shorthands for groupings of characters
    //   \d - any digit character (0-9)
    //   \w - any alphanumeric character (a-z, A-Z, 0-9, and some symbols)
    //   \s - any whitespace character (space, tab, etc.)
    //   \D - any NON-digit character
    //   \W - any NON-alphanumeric character
    //   \S - any NON-whitespace character
    //   . - any character that isn't a newline (\n)
    
    var nums = /\d/g; // search for any digits
    var words = /\w/g; // search for any word characters
    var space = /\s/g; // search for whitespaces
    var nonNums = /\D/g; // search for non digits
    var nonWords = /\W/g; // search for non word characters
    var nonSpace = /\S/g; // search for non white spaces
    var all = /./g; // search for any non newline character
    
    var str = "This contains all 6 types of characters.";
    var numsMatch = str.match(nums);
    var wordsMatch = str.match(words);
    var spaceMatch = str.match(space);
    var nonNumsMatch = str.match(nonNums);
    var nonWordsMatch = str.match(nonWords);
    var nonSpaceMatch = str.match(nonSpace);
    var allMatch = str.match(all);
    
    // There is one more character class called a "word boundary"
    var boundary = /\bJava\b/g;
    var boundaryStr = "Java has a boundary, but JavaScript does not";
    var boundaryMatch = boundaryStr.search(boundary);
    
    // It also has a reverse
    var nonBoundary = /Java\B/g;
    var nonBoundaryMatch = boundaryStr.search(nonBoundary);
    
    var result = "CHARACTER GROUPS\n"
        + "\nStr: \"" + str + "\""
        + "\n" + nums + "  ->  " + numsMatch
        + "\n" + words + "  ->  " + wordsMatch
        + "\n" + space + "  ->  " + spaceMatch
        + "\n" + nonNums + "  ->  " + nonNumsMatch
        + "\n" + nonWords + "  ->  " + nonWordsMatch
        + "\n" + nonSpace + "  ->  " + nonSpaceMatch
        + "\n" + all + "  ->  " + allMatch
        + "\n"
        + "\nStr: \"" + boundaryStr + "\""
        + "\n" + boundary + "  ->  " + boundaryMatch
        + "\n" + nonBoundary + "  ->  " + nonBoundaryMatch;
    return result;
}

/* Escaping Special Characters */
function special() {
    // As you probably noticed by now, RegEx uses special characters to declare specific behavior
    // If the pattern you are looking for actually contains a special character,
    // similarly to HTML, Javascript, etc., you will have to escape it using the backslash, '\'
    
    var reg = /[\.\?\!\(\)]/g;
    
    var str = "How many special characters ('.', '?', '!', '(', ')') are in this sentence?";
    var match = str.match(reg);
    
    var result = "ESCAPING SPECIAL CHARACTERS\n"
        + "\nRegEx: " + reg
        + "\nStr: \"" + str + "\"\n"
        + "\n" + reg + "  ->  " + match;
    return result;
}

/* Lengths */
function lengths() {
    // It's possible to set how many of a certain character code are expected
    
    var reg = /\d{1,2}-\d{1,2}-\d{4}/g; // a digit of length 1-2, a digit of length 1-2, and a digit of length 4
    
    var str = "Valid Dates: 06-08-2018, 6-8-2018, 06-8-2018, Invalid Date: 6-8-18";
    var match = str.match(reg);
    
    var result = "LENGTHS\n"
        + "\nRegEx: " + reg
        + "\nStr: \"" + str + "\"\n"
        + "\nstr.match(reg)  ->  " + match;
    return result;
}

/* Quantifiers: +, *, ? */
function quantifiers() {
    // There are also other special characters used to quantify occurances other than a specified range
    //   + - one or more
    //   ? - zero or one
    //   * - zero or more
    
    var plus = /\d+/g; // digit occurs at least once
    var question = /\d?/g; // digit occurs no more than once
    var star = /\d*/g; // digit does not occur or occurs infinitely many times
    
    var str1 = "no nums";
    var str2 = "12345";
    var plusMatch1 = str1.match(plus);
    var plusMatch2 = str2.match(plus);
    var questionMatch1 = str1.match(question);
    var questionMatch2 = str2.match(question);
    var starMatch1 = str1.match(star);
    var starMatch2 = str2.match(star);
    
    var result = "QUANTIFIERS\n"
        + "\nStr: \"" + str1 + "\"\n"
        + "\n" + plus + "  ->  " + plusMatch1
        + "\n" + question + "  ->  " + questionMatch1
        + "\n" + star + "  ->  " + starMatch1
        + "\n\nStr: \"" + str2 + "\"\n"
        + "\n" + plus + "  ->  " + plusMatch2
        + "\n" + question + "  ->  " + questionMatch2
        + "\n" + star + "  ->  " + starMatch2;
    return result;
}

/* Greedy Quantifiers */
function greedy() {
    // As you may have noticed in the previous example, the regular expression found matches for each quanitfier
    // The results, however, were different for each quanitifier
    // This is because quantifiers are "greedy"
    // Greedy quantifiers try to match at a given position and go as far forward as they can before the match fails
    // When it fails, it backtracks one position at a time
    
    var regGreedy = /".+"/g; // try to search for all "..." in order to replace with '...' the greedy way
    
    var str = 'This demo is about "Regular Expressions" in "JavaScript"'
    var greedyMatch = str.match(regGreedy); // this will yield "Regular Expressions" in "JavaScript" instead of just "Regular Expressions"
    
    // In order to avoid this behavior, you can make the quantifier "lazy" or repeat the minimal number of times
    // This means they will try to match only the next position first, and after failing, will backtrack once and then trying matching again
    var regLazy = /".+?"/g; // try to search for all "..." the lazy way
    
    var lazyMatch = str.match(regLazy);
    
    // Note, there are also "positive lookaheads" and "negative lookaheads" that can be considered,
    // but are outside of the sceop of this tutorial
    // https://www.regular-expressions.info/lookaround.html
    
    var result = "GREEDY\n"
        + "\nStr: \"" + str + "\"\n"
        + "\n" + regGreedy + "  ->  " + greedyMatch
        + "\n" + regLazy + "  ->  " + lazyMatch;
    return result;
}

/* Capturing Groups */
function groups() {
    // When trying to replace data using RegEx, it is possible to store the matched data
    // in order to use it either later in the expression, or later in a string replace method
    
    var reg = /(\w+), (\w+)/g; // this will look for a word, word
    
    var str = "LastName, FirstName"; // let's make this FirstName LastName
    // use .exec to view the array of groups (element 0 is the match, 1-N are the groups)
    var groups = reg.exec(str);
    
    // The matches can be referred to as $1, $2, etc.
    // where the number corresponds to the order in which the group matches were found
    // The entire match can be referenced with $&
    var repl = "$2 $1"
    var str2 = str.replace(reg, repl);
    
    // Alternatively, you can also use parenthesis to create "non-capturing" groups
    var nonGroup = /(?:pattern){1,2}!/g; // this will allow you to apply ranges and quanitfiers to a group without actually saving it
    var str3 = "pattern! patternpattern! patternpatternpattern!"
    var matches2 = str3.match(nonGroup);
    var nogroups = nonGroup.exec(str3);
    
    var result = "GROUPS\n"
        + "\nRegEx: " + reg
        + "\nStr: \"" + str + "\"\n"
        + "\nreg.exec(str)  ->  " + groups
        + "\n    groups[0]  ->  " + groups[0]
        + "\n    groups[1]  ->  " + groups[1]
        + "\n    groups[2]  ->  " + groups[2]
        + "\nstr.replace(group, repl)  ->  " + str2
        + "\n"
        + "\nRegEx: " + nonGroup
        + "\nStr: \"" + str3 + "\"\n"
        + "\nstr3.match(nonGroup)  ->  " + matches2
        + "\nnonGroup.exec(str3)  ->  " + nogroups;
    return result;
}

/* Differences in OR (|) */
function ors() {
    // Groups can also contains logical OR's (|)
    // (a|b) is essentially the same as [ab], but allows you access to the group
    // a|b also means a or b, but does not allow you access to the group
    // When used outside of a group, keep in mind the | will compare everything before it and everything after
    
    var reg1 = /gr(a|e)y/g; // gray or grey (and the same as /gr[ae]y/g)
    var reg2 = /gra|ey/g; // gra or ey
    
    var str = "Do you prefer gray or grey?";
    var match1 = str.match(reg1);
    var match2 = str.match(reg2);
    
    var result = "OR (|)\n"
        + "\nStr: \"" + str + "\"\n"
        + "\n" + reg1 + "  ->  " + match1
        + "\n" + reg2 + "  ->  " + match2;
    return result;
}

/* Test Questions! */

// Prompt 1
// Write a regular expression to confirm a user has entered a valid username, given the following requirements:
//  - 3-16 characters in length
//  - case does not matter
//  - contains no special characters other than _
//  - cannot start with a digit
function prompt1() {
    // We know the ENTIRE username must match the requirements, so let's start there:
    var username = /^$/;
    // We also know case does not matter
    username = /^$/i;
    // We know what characters are valid
    username = /^[a-z_][a-z0-9_]$/i
    // We know it needs between 3 and 16 characters
    username = /^[a-z_][a-z0-9_]{2,15}$/i
    
    var valid = "th1s_1s_my_name";
    var invalid = "0this-i$nt";
    
    var res1 = username.test(valid);
    var res2 = username.test(invalid);
    
    var result = "Prompt1: \"" + username + "\"\n"
        + "\n\"" + valid + "\"  ->  " + res1
        + "\n\"" + invalid + "\"  ->  " + res2;
    return result;
}

// Prompt 2
// Extract only the full names from a string which have titles
//  - Mr.
//  - Mrs.
//  - Ms.
//  - Dr.
// var str = "Mr. Harry Potter, Ms. Hermione Granger, Mr. Ronald Weasley, Lord Voldemort, Mrs. Molly Weasley";
function prompt2() {
    // We know the string needs to start with the title
    var names = /(Mr|Mrs|Ms|Dr)/g;
    // We know this must be followed by a period (don't forget to escape it!)
    names = /(Mr|Mrs|Ms|Dr)\./g;
    // Next we need a space, the first name, a space, and the last
    names = /(Mr|Mrs|Ms|Dr)\. ([a-zA-Z]+) ([a-zA-Z]+)/g;
    // This can actually be simplified
    names = /(Mr|Mrs|Ms|Dr)\. (([a-zA-Z]+) ?)+/g;
    
    var str = "Mr. Harry Potter, Ms. Hermione Granger, Mr. Ronald Weasley, Lord Voldemort, Mrs. Molly Weasley";
    
    var res = str.match(names);
    
    var result = "Prompt2: \"" + names + "\"\n"
        + "\nMr. Harry Potter, Ms. Hermione Granger, Mr. Ronald Weasley, Lord Voldemort, Mrs. Molly Weasley" + "  ->  \n    " + res;
    return result;
}

// Prompt 3
// Now, using the answer from Prompt 2, let's rearrange these names to be Last, First Title
function prompt3() {
    // We might have to update our RegEx first
    var names = /(Mr|Mrs|Ms|Dr)\. ([a-zA-Z]+) ([a-zA-Z]+)/g;
    
    var str = "Mr. Harry Potter, Ms. Hermione Granger, Mr. Ronald Weasley, Lord Voldemort, Mrs. Molly Weasley";
    var str2 = str.replace(names, "$3, $2 $1.");
    
    // To see the different groups, we can run .exec on the RegEx
    // (the first element will be the entire match, the next elements are the groups)
    var groups = names.exec(str);
    
    var result = "Prompt3: \"" + names + "\"\n"
        + "\n .exec  ->  " + groups
        + "\n .replace  ->  " + str2;
    return result;
}

// Prompt 4 / A Real World Example
// Think of a voice assistant which is able to interpret various utterances all leading to the same result. How could you account for someone asking Alexa or Google to search for something on YouTube?
// Chain together three different regular expressions to account for the following utterances:
//    YouTube [QUERY]
//    Search YouTube for [QUERY]
//    Search/Find (for) [QUERY] on YouTube
function prompt4() {
    // First, let's create strings for a few different test cases
    var test1 = "YouTube Beyonce";
    var test2 = "Search YouTube for Beyonce";
    var test3 = "Search for Beyonce on YouTube";
    var test4 = "Find Beyonce on YouTube";
    
    // Next, work on the `Youtube [QUERY]` case
    // First, we know that the word youtube should be the start of the pattern and only occur once, followed by one or more spaces
    regex = /(youtube){1} */;
    // Whatever happens next in the utterance should be part of the query we are trying to save, and needs to be extracted, so make sure it is placed in parenthesis to make it a group
    regex = /^(youtube){1} *(.*)/;
    
    // Next, work on the `Search YouTube for [QUERY]`
    // First, add a `|` (or) sign in order to start the next pattern
    regex = /(^(youtube){1} *(.*))|/;
    // Next, we know that `search` is the first term we're looking for (though not necessarily a requirement), followed by at least one space
    regex = /(^(youtube){1} *(.*))|((search)? *)/;
    // Then we need `youtube `
    regex = /(^(youtube){1} *(.*))|((search)? *youtube *)/;
    // Next is `for `
    regex = /(^(youtube){1} *(.*))|((search)? *youtube *for *)/;
    // And lastly, we need the search query itself
    regex = /(^(youtube){1} *(.*))|((search)? *youtube *for *(.*))/;
    
    // The last utterance case is `Search for [QUERY] on YouTube` or `Find [QUERY] on YouTube`
    // Again, add a `|` (or) sign in order to start the next pattern
    regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|/;
    // Similarly to the previous utterance, we start with search, but this time it could also be find
    regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|(search|find)? */;
    // The word `for` is optional
    regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|(search|find)? *(for)* */;
    // Next we need to save the actual search query
    regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|(search|find)? *(for)* *(.*?) */;
    // Then we may have `on youtube` or just `youtube`
    regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|(search|find)? *(for)* *(.*?) *(on)* *youtube/;
    
    // Now, we could go through and clean up our crazy capturing groups
    // The only infomration we really care about is the search query itself, so let's make everything else noncapturing
    regex = /^(?:youtube){1} *(.*)|(?:search)? *youtube *for *(.*)|(?:search|find)? *(?:for)* *(.*?) *(?:on)* *youtube/;
    
    // Lastly, we should ignore the case altogether, so we can add the `i` flag
    regex = /^(?:youtube){1} *(.*)|(?:search)? *youtube *for *(.*)|(?:search|find)? *(?:for)* *(.*?) *(?:on)* *youtube/i;
    
    var searchResults1 = regex.exec(test1); // Search Query will be in Group 3
    var searchResults2 = regex.exec(test2); // Search Query will be in Group 6
    var searchResults3 = regex.exec(test3); // Search Query will be in Group 10
    var searchResults4 = regex.exec(test4); // Search Query will be in Group 10
    
    var result = "Prompt4: " + "\"Youtube [Beyonce], Search Youtube for [Beyonce], Search/Find (for) [Beyonce] on YouTube" + "\"\n"
        + "\n\"" + test1 + "\"  ->  " + searchResults1[1]
        + "\n\"" + test2 + "\"  ->  " + searchResults2[2]
        + "\n\"" + test3 + "\"  ->  " + searchResults3[3]
        + "\n\"" + test4 + "\"  ->  " + searchResults4[3];
    return result;
}