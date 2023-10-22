function check()
    {
        var question_01 = document.myform.question_01.value;
        var question_02 = document.myform.question_02.value;
        var question_03 = document.myform.question_03.value;
        var question_04 = document.myform.question_04.value;
        var count = 0;
        if(question_01 == "a")
        {
            count = count + 1;
        }
        if(question_01 == "b")
        {
            count = count + 2;
        }
        if(question_01 == "c")
        {
            count = count + 3;
        }
        if(question_01 == "d")
        {
            count = count + 4;
        }
        if(question_02 == "a")
        {
            count = count + 1;
        }
        if(question_02 == "b")
        {
            count = count + 4;
        }
        if(question_02 == "c")
        {
            count = count + 2;
        }
        if(question_03 == "a")
        {
            count = count + 3;
        }
        if(question_03 == "b")
        {
            count = count + 2;
        }
        if(question_03 == "c")
        {
            count = count + 1;
        }
        if(question_04 == "a")
        {
            count = count + 3;
        }
        if(question_04 == "b")
        {
            count = count + 2;
        }
        if(question_04 == "c")
        {
            count = count + 1;
        }
        if(count >= 4 && count <= 8)
        {
            document.getElementById("popup1").style.display = "block";
        }
        if(count > 8 && count <= 12)
        {
            document.getElementById("popup2").style.display = "block";
        }
        if(count > 12 && count <= 16)
        {
            document.getElementById("popup3").style.display = "block";
        }
    }

function closePopup() { // Click vào close thì gán style cho Popup là display:none để ẩn đi
        document.getElementById("popup1").style.display = "none";
        document.getElementById("popup2").style.display = "none";
        document.getElementById("popup3").style.display = "none";
    }