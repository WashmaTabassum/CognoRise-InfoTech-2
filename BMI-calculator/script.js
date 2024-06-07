function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseInt(document.getElementById('feet').value);
    const inches = parseInt(document.getElementById('inches').value);
    const age = parseInt(document.getElementById('age').value);

    if (!isNaN(weight) && !isNaN(feet) && !isNaN(inches) && !isNaN(age)) {
        const totalInches = (feet * 12) + inches;
        const heightInMeters = (totalInches * 2.54) / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let category = '';
        let dietRecommendation = '';
        if (bmi < 18.5) {
            category = 'Underweight';
            dietRecommendation = 'You may need to focus on increasing your calorie intake with nutritious foods like lean proteins, healthy fats, whole grains, and plenty of fruits and vegetables. Incorporating strength training exercises can help you build muscle mass.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
            dietRecommendation = 'Maintaining a balanced diet with a variety of nutrient-rich foods and staying physically active will help you maintain your current weight and overall health.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
            dietRecommendation = 'To manage your weight, consider reducing your calorie intake by limiting processed foods, sugary drinks, and unhealthy snacks. Increase your physical activity levels with regular cardio exercises like walking, cycling, or swimming.';
        } else {
            category = 'Obese';
            dietRecommendation = 'It’s important to focus on adopting healthier eating habits by including more whole foods, such as fruits, vegetables, lean proteins, and whole grains. Incorporating regular aerobic exercises, like brisk walking or jogging, along with strength training can help you lose weight and improve your overall health.';
        }

        const resultMessage = `Your BMI is <b>${bmi}</b> - <i>${category}</i>. <br> <b>Recommendations</b> <br> ${dietRecommendation}`;

        document.getElementById('result').innerHTML = resultMessage;
        document.getElementById('bmiFormContainer').classList.add('hidden');
        document.getElementById('resultContainer').classList.remove('hidden');
        document.getElementById('error-message').innerHTML = '';
        document.getElementById('error-message').classList.add('hidden');
    } else {
        document.getElementById('error-message').innerHTML = 'Please enter valid weight, height, and age.';
        document.getElementById('error-message').classList.remove('hidden');
    }
}

function goBack() {
    document.getElementById('resultContainer').classList.add('hidden');
    document.getElementById('bmiFormContainer').classList.remove('hidden');
}

