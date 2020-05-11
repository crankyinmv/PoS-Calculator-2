function Calculator()
{
	this.state = Calculator.number1Start;
	this.displayed = 0;
	this.num1 = 0;
	this.num2 = 0;
	this.operator = '';
}

/* State variables. */
Object.defineProperty(Calculator, 'number1Start', {value: Symbol('number1_start')});
Object.defineProperty(Calculator, 'number2Start', {value: Symbol('number2_start')});
Object.defineProperty(Calculator, 'number1', {value: Symbol('number1')});
Object.defineProperty(Calculator, 'number2', {value: Symbol('number2')});

Calculator.prototype.getKey = function(key)
{
	if(key === 'C')
	{
		this.clear();
		return;
	} 

	if(this.state === Calculator.number1Start)
	{
		if((key >= '0') && (key <= '9'))
		{
			this.displayed = key - '0';
			this.state = Calculator.number1;
		}
	}
	else if(this.state === Calculator.number1)
	{
		if((key >= '0') && (key <= '9'))
		{
			this.displayed = this.displayed * 10 + (key - '0');
		}
		else if(key === '←')
		{
			this.displayed = Math.floor(this.displayed/10);
		}
		else if((key === '+') || (key === '-') || (key === 'X') || (key === '÷'))
		{
			this.num1 = this.displayed;
			this.operator = key;
			this.state = Calculator.number2Start;
		}
	}
	else if(this.state === Calculator.number2Start)
	{
		if((key >= '0') && (key <= '9'))
		{
			this.displayed = key - '0';
			this.state = Calculator.number2;
		}
	}
	else if(this.state === Calculator.number2)
	{
		if((key >= '0') && (key <= '9'))
		{
			
			this.displayed = this.displayed * 10 + (key - '0');
		}
		else if(key === '←')
		{
			this.displayed = Math.floor(this.displayed/10);
		}
		else if((key === '+') || (key === '-') || (key === 'X') || (key === '÷'))
		{
			this.num2 = this.displayed;
			this.calculate();
			this.num1 = this.displayed;
			this.operator = key;
			this.state = Calculator.number2Start;
		}
		else if(key === '=')
		{
			this.num2 = this.displayed;
			this.calculate();
			this.state = Calculator.number1Start;
		}
	}
}


Calculator.prototype.calculate = function()
{
	if((this.num2 === 0) && (this.operator === '÷'))
	{
		this.overflow = true;
	}
	else if(this.state !== Calculator.number2)
	{
		throw("calculation from state: "+this.state);
	}
	else
	{
		if(this.operator === '+')
		{
			this.displayed = this.num1+this.num2;
		}
		else if(this.operator === '-')
		{
			this.displayed = this.num1-this.num2;
		}
		else if(this.operator === 'X') 
		{
			this.displayed = this.num1*this.num2;
		}
		else if(this.operator === '÷')
		{
			this.displayed = this.num1/this.num2;
		}
		else
			throw('Invalid operation: '+this.operator);
	}
}

Calculator.prototype.clear = function()
{
	this.state = Calculator.number1Start;
	this.displayed = 0;
	this.overflow  = false;
}

Calculator.prototype.readDisplay = function()
{
	if(this.overflow)
		return 'INF';
	else
		return ''+this.displayed;
}
