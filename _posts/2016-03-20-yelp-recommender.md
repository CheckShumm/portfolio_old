---
layout: post
title:  "Yelp"
excerpt: "An android app that suggests restaurants, bars, and other activities to help you decide what to do!"
project: true
feature: /assets/img/yelp.png
link: "https://github.com/CheckShumm/Yelp-Recommendation-Engine"
tag:
- Python
- AWS
- Spark
comments: true
---

<figure >
   <img src="/assets/img/yelp.png">
</figure>
    
<center><b>Yelp Recommender System</b> is an engine that recommends new restaurants to users based on the yelp data set!</center>
     
Using collaborative filtering, the yelp recommender system predicts a user's review based on similar ratings found in the yelp data set.
The application uses a least alternating squares algorithm to generate the predictions for the reviews.
The whole system is hosted on an AWS that runs the algorithm on a GPU cluster for maximum performance. 
The application is written entirely in pyspark, a python wrapper for Apache Spark.

---

    
