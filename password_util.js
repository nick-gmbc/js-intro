caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lower = "abcdefghijklmnopqrstuvwxyz";
digits = "0123456789";
punc = "!$%^&*()?><@;:";

function contains_one_of(test_string,char_list) {
    // Returns true test_string contains any one of the characters
    // in char_list
    found = false;
    for (i=0; i<char_list.length; i++) {
        //console.log(char_list.substring(i,i+1));
        if (test_string.includes(char_list.substring(i,i+1))) {
            found = true;
        }
    }
    return found;
}





function check_password(password) {
    ok = true;
    if (password.length >= 10) {
        long_enough = true;
    }
    else {
        long_enough = false;
    }
    
    contains_digit = contains_one_of(password, digits);
    //console.log(contains_digit);
    contains_lower = contains_one_of(password, lower);
    contains_caps = contains_one_of(password, caps);
    contains_punc = contains_one_of(password, punc);

    ok = long_enough && contains_digit && contains_caps && contains_punc && contains_lower;

    return ok;
}