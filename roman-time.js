var hours = process.argv[2];
var minutes = process.argv[3];
var Decada = ['', 'X', 'XX', 'XXX', 'XL', 'L'];  //Я убрал значение нуля из "десятков"
var Units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];// и "единиц"
	hours = Number(hours);
	minutes = Number(minutes);
var text1 = 'Ваше время арабскими числами(часы и минуты): ';
 
	if ( (hours < 23 || hours >= 0)&&(minutes >= 0 || minutes < 60) ) 
	{
		
		var checkHours = hours;
		var checkMinutes = minutes;
		console.log (text1 + hours + ':' + minutes);    
		var hoursUnits = hours%10;
		var hoursDecada = (hours - hoursUnits) / 10;                
		var minutesUnits = minutes%10;
		var minutesDecada = (minutes - minutesUnits) / 10;    
		var RomanHoursDecada, RomanhoursUnits, RomanMinutesDecada, RomanMinutesUnits;
		//Добавил проверку, где я проверяю, как введено число. И если там 0, то нулевой элемент массивов меняется
			if (checkHours === 0 || checkMinutes === 0)
				{
					Decada[0] = 'N';
					Units[0] = 'N';
				}
		//Дальше все также
			for (var i = 0; i < Decada.length; i++)
				{
					if (hoursDecada === i) RomanHoursDecada = Decada[i];
				}
			for (var i = 0; i < Units.length; i++)
				{
					if (hoursUnits === i) RomanHoursUnits = Units[i];
				}
			for (var i = 0; i < Decada.length; i++)
				{
					if (minutesDecada === i) RomanMinutesDecada = Decada[i];
				}
			for (var i = 0; i < Units.length; i++)
				{
					if (minutesUnits === i) RomanMinutesUnits = Units[i];
				}

			console.log('Ваше время записывается римскими цифрами как: ');
			console.log (RomanHoursDecada + RomanHoursUnits + ":" + RomanMinutesDecada + RomanMinutesUnits);
			console.log('Спасибо, что дождались решения, надеюсь, оно успешно');
	}
	else
	{
		console.log('Значение введено неверно');
		return;
	}