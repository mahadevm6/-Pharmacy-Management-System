const express=require("express")
const cors=require("cors")
const mysql=require("mysql")

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medical database system'
})

app.get('/',(req,res)=>{
    const sql = "SELECT * FROM stock_list";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})


//out of order list code

app.get('/outoforder',(req,res)=>{
    const sql = "SELECT product_name, seller_name  FROM stock_list  WHERE quantity < 1 ";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})

//out of order list code end

// get by id
app.get('/read/:id',(req,res)=>{
    const sql = "SELECT * FROM stock_list WHERE product_id =?";
    const id = req.params.id;

    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})//get by id end
//update code

app.put('/update/:id',(req,res)=>{
    const sql = 'UPDATE stock_list SET `product_name`=?,`quantity`=?,`seller_name`=? WHERE `product_id`=?';
    const id= req.params.id;
    db.query(sql,[req.body.product_name,req.body.quantity,req.body.seller_name,id],(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);    
    })
})
//updatecode end

//delete data

app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM stock_list WHERE product_id = ?";
    const id= req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);    
    })
})
//delete code end

//add data code 

app.post('/addstock', (req, res) => {
    const sql = "INSERT INTO stock_list (`product_name`, `quantity`, `seller_name`) VALUES (?, ?, ?)";
    const values = [
        req.body.product_name,
        req.body.quantity,
        req.body.seller_name
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while inserting data.' });
        }
        return res.status(200).json({ message: 'Data inserted successfully.' });
    });
});
//end of add data code

// *******************************************************************************************
// *******************backend for the seller table ******************************************
// *******************************************************************************************

//get data from sellers table
app.get('/seller',(req,res)=>{
    const sql = "SELECT * FROM sellers_list";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})
//get data from sellers table end
//add sellers data from sellers table

app.post('/Sellersl', (req, res) => {
    const sql = "INSERT INTO sellers_list (`product_id`, `composition`, `seller_name`, `mrp`, `net_price`, `profit_percentage`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.product_id,
        req.body.composition,
        req.body.seller_name,
        req.body.mrp,
        req.body.net_price,
        req.body.profit_percentage
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while inserting data.' });
        }
        return res.status(200).json({ message: 'Data inserted successfully.' });
    });
});

//add sellers data from sellers table end

//delete remove seller from the sellers list table
app.delete('/sellerdelete/:id',(req,res)=>{
    const sql = "DELETE FROM sellers_list WHERE product_id = ?";
    const id= req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);    
    })
})


// get by id in the sellers list
app.get('/sellerread/:id',(req,res)=>{
    const sql = "SELECT * FROM sellers_list WHERE product_id =?";
    const id = req.params.id;

    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})
//get by id in the sellers list end

//update code for sllers list

app.put('/sellerupdate/:id', (req, res) => {
    const sql =
      'UPDATE sellers_list SET `composition`=?, `seller_name`=?, `mrp`=?, `net_price`=?, `profit_percentage`=? WHERE `product_id`=?';
    const id = req.params.id;
    db.query(
      sql,
      [
        req.body.composition,
        req.body.seller_name,
        req.body.mrp,
        req.body.net_price,
        req.body.profit_percentage,
        id
      ],
      (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
      }
    );
  });
  //updatecode for sllers list end

//   *******************Expiry items table ******************
//   *******************************************************

//get data from the expiry table code
app.get('/expiry_items',(req,res)=>{
    const sql = "SELECT product_name, DATE_FORMAT(expiry_date, '%d-%m-%Y') AS expiry_date, expires_in, is_branded, profit_percentage FROM expiry_items";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})

//get data from the expiry table code ends here


//sorted order of the expiry items code
app.get('/expiry_items_sorted',(req,res)=>{
    const sql = "SELECT *, expiry_date - CURRENT_DATE AS days_until_expiry FROM expiry_items ORDER BY days_until_expiry ASC;";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})

//sorted order of the expiry items code ends


//expired items  from the expiry items code
app.get('/expired_items',(req,res)=>{
    const sql = "SELECT product_name  FROM expiry_items WHERE expiry_date < CURRENT_DATE    ";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})

//expired items  from the expiry items code ends


//add data in the expiry table code starts here
app.post('/expiryadd', (req, res) => {
    const sql = "INSERT INTO expiry_items (`product_name`, `expiry_date`, `expires_in`, `is_branded`, `profit_percentage`) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.product_name,
        req.body.expiry_date,
        req.body.expires_in,
        req.body.is_branded,
        req.body.profit_percentage
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while inserting data.' });
        }
        return res.status(200).json({ message: 'Data inserted successfully.' });
    });
});

//add data in the expiry table code starts here


//delete remove data from the sellers list table
app.delete('/expirydelete/:product_name', (req, res) => {
    const sql = "DELETE FROM expiry_items  WHERE product_name = ?";
    const product_name = req.params.product_name;

    db.query(sql, [product_name], (err, result) => {
        if (err) {
            return res.json({ message: "Error inside server" });
        }
        return res.json(result);
    });
});


//delete remove data from the sellers list table code ends here

//get element by product_name data from the expiry table code 
app.get('/expiryedit/:product_name', (req, res) => {
    const sql = "SELECT * FROM expiry_items WHERE product_name = ?";
    const product_name = req.params.product_name;

    db.query(sql, [product_name], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    });
});

//get element by product_name data from the expiry table code  ends here

//update data in expiry table 
app.put('/expiryupdate/:product_name', (req, res) => {
    const sql =
      'UPDATE expiry_items SET `product_name`=?, `expiry_date`=?, `expires_in`=?, `is_branded`=?, `profit_percentage`=? WHERE `product_name`=?';
    const { product_name } = req.params; // Use a different variable name for clarity
    const { expiry_date, expires_in, is_branded, profit_percentage } = req.body; // Destructure request body for clarity
    db.query(
      sql,
      [
        req.body.product_name, // Use the variable you destructured earlier
        expiry_date,
        expires_in,
        is_branded,
        profit_percentage,
        product_name // Use the route parameter here
      ],
      (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
      }
    );
});
//update data in expiry table  code ends here

//******************************************************************************************/
//*********************************billing table *******************************************/
// ********************************************************************************************

//data get from the billing table 
app.get('/billing',(req,res)=>{
    const sql = "SELECT * FROM billing";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})
//data get from the billing table code end



//add data in the table code

app.post('/billing', (req, res) => {
    const sql = "INSERT INTO billing (`batch_no`, `product_name`, `quantity_purchased`, `customer_name`, `mrp`, `dr_name`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.batch_no,
        req.body.product_name,
        req.body.quantity_purchased,
        req.body.customer_name,
        req.body.mrp,
        req.body.dr_name
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while inserting data.' });
        }
        return res.status(200).json({ message: 'Data inserted successfully.' });
    });
});
//add data in the table code end

//delete data from the table code  

app.delete('/billdelete/:batch_no', (req, res) => {
    const sql = "DELETE FROM billing  WHERE batch_no = ?";
    const batch_no = req.params.batch_no;

    db.query(sql, [batch_no], (err, result) => {
        if (err) {
            return res.json({ message: "Error inside server" });
        }
        return res.json(result);
    });
});

//delete data from the table code end

//edit data from the table code
app.get('/billingedit/:batch_no', (req, res) => {
    const sql = "SELECT * FROM billing  WHERE batch_no = ?";
    const batch_no = req.params.batch_no;

    db.query(sql, [batch_no], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    });
});
//edit data from the table code


//generation of bill from the  table  code start

app.get('/customersbill/:batch_no', (req, res) => {
    const sql = "SELECT batch_no,product_name,quantity_purchased,mrp FROM `billing` WHERE batch_no=?";
    const batch_no = req.params.batch_no;

    db.query(sql, [batch_no], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    });
});

//generation of bill from the  table  code  end
//update code 

app.put('/billingedit/:batch_no', (req, res) => {
    const sql =
      'UPDATE billing SET `batch_no`=?, `product_name`=?, `quantity_purchased`=?, `customer_name`=?, `mrp`=?, `dr_name`=? WHERE `batch_no`=?';
    const { batch_no: routeBatchNo } = req.params; // Use a different variable name for clarity
    const { product_name, quantity_purchased, customer_name, mrp, dr_name } = req.body; // Destructure request body for clarity
    db.query(
      sql,
      [
        routeBatchNo, // Use the route parameter from the URL
        product_name,
        quantity_purchased,
        customer_name,
        mrp,
        dr_name,
        routeBatchNo // Use the route parameter here
      ],
      (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
      }
    );
});
//update code ends here

//******************************************************************************************/
//*********************************customer table *******************************************/
// ********************************************************************************************

//data get from the customer table 
app.get('/customersdata',(req,res)=>{
    const sql = "SELECT * FROM customers_list";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})
//data get from the billing table code end



// higher prophite data code start
app.get('/higherprophite',(req,res)=>{
    const sql = "SELECT  product_id,composition, seller_name, profit_percentage	FROM sellers_list WHERE mrp	 > 500 AND profit_percentage > 30 ";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})
// higher prophite data code end


//add  data in the customers 

app.post('/customeradd', (req, res) => {
    const sql = "INSERT INTO customers_list (`customer_name`, `mobile_number`, `total_amount`, `suggestion_link`) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.customer_name,
        req.body.mobile_number,
        req.body.total_amount,
        req.body.suggestion_link
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while inserting data.' });
        }
        return res.status(200).json({ message: 'Data inserted successfully.' });
    });
});

//add  data in the customers end 

//delete data from the customer

app.delete('/customerdelete/:customer_id', (req, res) => {
    const sql = "DELETE FROM customers_list   WHERE customer_id = ?";
    const customer_id = req.params.customer_id;

    db.query(sql, [customer_id], (err, result) => {
        if (err) {
            return res.json({ message: "Error inside server" });
        }
        return res.json(result);
    });
});

//delete data from the customer end

//edit data from the customer table code
app.get('/customeredit/:customer_id', (req, res) => {
    const sql = "SELECT * FROM customers_list WHERE customer_id = ?";
    const customer_id = req.params.customer_id;

    db.query(sql, [customer_id], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    });
});
//edit data from the table code

//update data from the customer table code


app.put('/customeredit/:customer_id', (req, res) => {
    const sql =
      'UPDATE customers_list SET `customer_name`=?, `mobile_number`=?, `total_amount`=?, `suggestion_link`=? WHERE `customer_id`=?';
    const { customer_id: routeCustomerId } = req.params; // Use a different variable name for clarity
    const { customer_name, mobile_number, total_amount, suggestion_link } = req.body; // Destructure request body for clarity
    db.query(
      sql,
      [
        customer_name,
        mobile_number,
        total_amount,
        suggestion_link,
        routeCustomerId // Use the route parameter here
      ],
      (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
      }
    );
});


//update data from the customer table code


//******************************************************************************************/
//*********************************expiry table *******************************************/
// ********************************************************************************************

app.get('/expiredreturn',(req,res)=>{
    const sql = "SELECT * FROM expiry_return";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})

//Expiry return add table 

app.post('/expiryradd', (req, res) => {
    const sql = "INSERT INTO expiry_return (`product_name`, `quantity`, `mrp`, `amount`, `seller_name`, `returned_date`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.product_name,
        req.body.quantity,
        req.body.mrp,
        req.body.amount,
        req.body.seller_name,
        req.body.returned_date
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while inserting data.' });
        }
        return res.status(200).json({ message: 'Data inserted successfully.' });
    });
});

//Expiry return add table code end


//delete data from the customer

app.delete('/expiryrdelete/:product_name', (req, res) => {
    const sql = "DELETE FROM expiry_return WHERE product_name = ?";
    const product_name = req.params.product_name;

    db.query(sql, [product_name], (err, result) => {
        if (err) {
            return res.json({ message: "Error inside server" });
        }
        return res.json(result);
    });
});

//delete data from the customer end


//edit data from theexpiry return table code
app.get('/expiryredit/:product_name', (req, res) => {
    const sql = "SELECT * FROM expiry_return  WHERE product_name = ?";
    const product_name = req.params.product_name;

    db.query(sql, [product_name], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    });
});

//edit data from theexpiry return table code end 

//update data from theexpiry return table code

app.put('/expiryedit/:product_name', (req, res) => {
    const sql =
      'UPDATE expiry_return SET `quantity`=?, `mrp`=?, `amount`=?, `seller_name`=?, `returned_date`=? WHERE `product_name`=?';
    const { product_name } = req.params; // Use the route parameter for product_name
    const { quantity, mrp, amount, seller_name, returned_date } = req.body; // Destructure request body for clarity
    db.query(
      sql,
      [quantity, mrp, amount, seller_name, returned_date, product_name],
      (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
      }
    );
  });
  

  //******************************************************************************************/
//*********************************h1 drug table *******************************************/
// ********************************************************************************************

//get data from the drug table

app.get('/h1drug',(req,res)=>{
    const sql = "SELECT * FROM h1_drug";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Erron inside server"});
        return res.json(result);
    })
})

//get data from the drug table code end 

//post data  in the h1 drug table 
app.post('/h1drugadd', (req, res) => {
    const sql = "INSERT INTO h1_drug (`customer_name`, `customer_add`, `h1_drug_name`, `quantity`, `dr_name`, `dr_working_clinic`, `date`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.customer_name,
        req.body.customer_add,
        req.body.h1_drug_name,
        req.body.quantity,
        req.body.dr_name,
        req.body.dr_working_clinic,
        req.body.date
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while inserting data.' });
        }
        return res.status(200).json({ message: 'Data inserted successfully.' });
    });
});
//post data  in the h1 drug table code ends here


//delete data from the h1 drug table

app.delete('/h1drugdelete/:customer_name', (req, res) => {
    const sql = "DELETE FROM h1_drug  WHERE customer_name = ?";
    const customer_name = req.params.customer_name;

    db.query(sql, [customer_name], (err, result) => {
        if (err) {
            return res.json({ message: "Error inside server" });
        }
        return res.json(result);
    });
});

//delete data from the drug table end


//get data for edit the h1_drug tabel
app.get('/h1drugedit/:customer_name', (req, res) => {
    const sql = "SELECT * FROM h1_drug  WHERE customer_name = ?";
    const customer_name= req.params.customer_name;

    db.query(sql, [customer_name], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    });
});

//get data for edit the h1_drug tabel ends here



//update data from  h1drrug table code

app.put('/h1drugedit/:customer_name', (req, res) => {
    const sql = 'UPDATE h1_drug SET `customer_name`=?, `customer_add`=?, `h1_drug_name`=?, `quantity`=?, `dr_name`=?, `dr_working_clinic`=?, `date`=? WHERE `customer_name`=?';
  
    const { customer_name } = req.params; // Use the route parameter for customer_name
    const { customer_add, h1_drug_name, quantity, dr_name, dr_working_clinic, date } = req.body; // Destructure request body for clarity
  
    db.query(
      sql,
      [customer_name, customer_add, h1_drug_name, quantity, dr_name, dr_working_clinic, date, customer_name],
      (err, result) => {
        if (err) {
          console.error(err); // Log the error for debugging purposes
          return res.status(500).json({ message: "Error inside server" });
        }
        return res.json(result);
      }
    );
  });
      
//update data from  h1drrug table code ends her
  


// ********************************************************************************************
// **********************  Complex queries ***************************************************
// *******************************************************************************************



app.get('/complexqueri', (req, res) => {
    const sql = "SELECT t4.customer_name, t4.quantity_purchased, t5.total_amount, t1.product_name FROM billing t4 JOIN customers_list t5 ON t4.customer_name = t5.customer_name JOIN stock_list t1 ON t4.product_name = t1.product_name";
    
    const product_name = req.params.product_name;

    db.query(sql, [product_name], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    });
});


//profit of each product 

app.get('/profitofeachp', (req, res) => {
    const sql = "SELECT t1.product_name, SUM(t4.quantity_purchased) AS total_quantity_sold, SUM(t4.quantity_purchased * (t2.mrp - t2.net_price)) AS total_profit FROM stock_list t1 JOIN billing t4 ON t1.product_name = t4.product_name JOIN sellers_list t2 ON t1.product_id = t2.product_id GROUP BY t1.product_name ORDER BY total_quantity_sold DESC";

    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    });
});

//profit of each product  end here 







app.listen(8081,()=>{
    console.log("Listening");
})
