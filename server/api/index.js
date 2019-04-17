import highchartSampleData from './highchartSampleData';
//import stockPrice from './stockPrice';
import express from 'express';

var router = express.Router();
// setup our REST API routes

router.use('/highchartSampleData', highchartSampleData);
//router.use('/stockPrice', stockPrice);

// This is not needed
/*router.use((req, res) => {
    res.status(404).send('no such API route');
});*/

// Changed this
module.exports = router;

// Removed this
// export default router;
