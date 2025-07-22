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

function random_int(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)+lower);
}

function pick_at_random_from(chars) {
    random_position = random_int(0, chars.length-1);
    return chars.substring(random_position,random_position+1);
}

function generate_password(password_length) {
    // Generates a password of password_length
    // if password_length < 10, set length to 10
    if (password_length < 10) {
        password_length = 10;
    }
    password = "AA";
    while (! check_password(password)) {
        password = "";
        for (char_count = 1; char_count <= password_length; char_count++) {
            char_type =  random_int(1,4)
            if (char_type == 1) {
                password = password + pick_at_random_from(caps);
            }
            else if (char_type == 2) {
                password = password +  pick_at_random_from(lower);
            }
            else if (char_type == 3) {
                password = password +  pick_at_random_from(digits);
            }
            else {
                password = password + pick_at_random_from(punc);
            }
        }   
    }
    return password;
    
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