import express from "express";
import YahooFinance  from "yahoo-finance2";
import cors from "cors";
const app = express();
const yahoo = new YahooFinance();
const port = 3000;


app.use(cors());

async function getStock(symbol){
    const cota = await yahoo.quote(symbol);
    return{
        symbol: cota.symbol,
        price: cota.regularMarketPrice,
        change: cota.regularMarketChange,
        min: cota.regularMarketDayLow,
        max: cota.regularMarketDayHigh,
        open: cota.regularMarketOpen
    };
}

app.get('/stock/:ticker', async (req,res) => {
    try{
        const symbol = req.params.ticker;
        const stock = await getStock(symbol);
        res.json(stock);
    
        if(!stock || !stock.symbol){
        return res.status(404).json({error: "Ação não encontrada"});
        }
    } catch (error){
        res.status(500).json({error: error.message});
    }
});

app.listen(port,() => {
    console.log("Servidor rodando");
});
