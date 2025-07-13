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

type InvestmentResult = {
    year:string,
    totalAmount:number,
    totalContribution:number,
    totalInterestEarned:number
}

type CalculationResult = InvestmentResult[]|string

function calculateInvest(data:InvestmentData):CalculationResult{
    // Create message variable to store info.
    let message:string;
    // Data need to be destructure the object. 
    const {initialAmount,annualContribution,expectedReturn,duration} = data;
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;

    // Check inputs to make sure inputs ar valid and no empty.
    if(initialAmount <= 0){
        if(initialAmount < 0){
            return 'Initial investment must be at least zero';
        }else{
            message = 'For better investment return, deposit at least $100';
        }
    };
    if(duration <= 0 ){
        return 'No valid amount of years provided. Select at least 1Year';
    };
    if ( expectedReturn < 0 ){
        total = 0
        message = 'Expected return must be at least zero!';
    };
    const annualResults:InvestmentResult[] = [];

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