var hours = process.argv[2];
var minutes = process.argv[3];
var Decada = ['NN', 'X', 'XX', 'XXX', 'XL', 'L'];
var Units = ['NN', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
	hours = Number(hours);
	minutes = Number(minutes);
var text1 = 'Ваше время арабскими числами: ';
 
	if ( (hours > 23) || (hours < 0)) 
		{
			console.log ("Неверно введено Время, попробуйте еще раз");
			return;
		}
	if ((minutes > 59) || (minutes < 0))
		{
			console.log ('Неверный, к сожалению, ввод');
			return;
		}

console.log (text1 + hours + ':' + minutes);    
var hoursUnits = hours%10;
var hoursDecada = (hours - hoursUnits) / 10;                
var minutesUnits = minutes%10;
var minutesDecada = (minutes - minutesUnits) / 10;    
var RomanHoursDecada, RomanhoursUnits, RomanMinutesDecada, RomanMinutesUnits;
   
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