// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    let newString = [];
[...s].forEach(character => {
    let code = character.charCodeAt(0);
    if ((code>=97 && code<=122)) {
        if (code+(k%26) > 122) {
            code-=26;
        }
        newString.push(code+(k%26));
    } else if ( (code>=65 && code<=90)) {
        if (code+(k%26) > 90) {
            code-=26;
        }
        newString.push(code+(k%26));
    }
    else {
        newString.push(code);
    }
})
return String.fromCharCode(...newString);
}

// console.log(caesarCipher('middle-Outz', 2)) // okffng-Qwvb
// console.log(caesarCipher('Hello_World!', 4)) // Lipps_Asvph!
// console.log(caesarCipher('www.abc.xy', 9)) // fff.jkl.gh
console.log(caesarCipher('!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U', 62)) // !w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E


