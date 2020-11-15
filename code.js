$(document).ready(function () {

    var myRules =
        {
            height:
                {
                    required: true,
                    min: 59,
                    max: 79,
                    digits: false
                },
            weight:
                {
                    required: true,
                    min: 88,
                    max: 353,
                    digits: false
                }
        };

    var myMessages =
        {
            height:
                {
                    required: "Please enter your height",
                    min: "Too low, your number should be above 58",
                    max: "Too high, your number should be below 80",
                    digits: "Your height cannot contain numbers"
                },
            weight:
                {
                    required: "Please enter your weight",
                    min: "Too low, your number should be above 87",
                    max: "Too high, your number should be below 352",
                    digits: "Your weight cannot contain numbers"
                }
        };

    $("form").validate(
        {
            submitHandler: calculateBmi,
            rules: myRules,
            messages: myMessages
        }
    );

    $(".bmiButton").click(calculateBmi);

    function calculateBmi()
    {
        var height = parseFloat($("#height").val());
        var weight = parseFloat($("#weight").val());


        var bmi = (weight / (height**2)) * 703;

        var index;
        if (bmi < 18.5)
        {
            index = 'Underweight';
        }
        else if (bmi < 25)
        {
            index = 'Healthy weight';
        }
        else if (bmi < 30)
        {
            index = 'Overweight';
        }
        else
        {
            index = 'Obese';
        }

        $("#output").text(`You are ${index} with a BMI of ${bmi.toFixed(1)}`);

    }

});
