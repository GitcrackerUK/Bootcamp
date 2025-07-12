// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
    initialAmount:number,
    annualContribution:number,
    expectedReturn:number,
    duration:number
};

type investmentResult = {
    year:string,
    totalAmount:number,
    totalContribution:number,
    totalInterestEarned:number
}

type CalculationResult = investmentResult[]|string

function calculateInvest(data:InvestmentData):CalculationResult{
    const {initialAmount,annualContribution,expectedReturn,duration} = data;
    if(initialAmount < 0){
        return 'Initial investment must be at least zero'
    }
    if(duration <= 0 ){
        return 'No valid amount of years provided.'
    }
    if ( expectedReturn < 0 ){
        return 'Expected return must be at least zero!'
    }
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;

    const annualResults:investmentResult[] = [];

    for(let i = 0; i < duration; i++){
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContribution - initialAmount;
        totalContribution = totalContribution + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year:`Year ${i+1}`,
            totalAmount:total,
            totalInterestEarned,
            totalContribution
        })
    }
    return annualResults
}

function printResults(){

}

// const results = calculateInvest();

printResults();