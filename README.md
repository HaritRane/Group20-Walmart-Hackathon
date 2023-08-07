# walmart-hackathon
Video link: https://drive.google.com/file/d/1dLNFnbG0djzFbzohr5BOaI1K1BFVi79_/view?usp=sharing


In this hackathon, we have chosen the fraud detection theme, as we know that almost 80% of reported incidents of data breaches are due to phishing 
therefore to tackle this issue we decided to move ahead with phishing URL detection using machine learning,


The flow of our machine learning model is as follows 
1]The user enters the URL in the input box.
2]The URL is fragmented into various parameters and depending upon those parameters fraud detection is done by the ML model
3]And the results are displayed to the user in the UI.



We have classified the links using the Gradient Boosting Algorithm, this is the 
Gradient Boosting is a powerful boosting algorithm, in which each new model is trained to minimize the loss function such as mean squared error or cross-entropy.
In our model, we have various parameters such as 

HTTPS                  
AnchorURL              
PrefixSuffix-          
WebsiteTraffic         
SubDomains             
RequestURL             
LinksInScriptTags      
DomainRegLen          
ServerFormHandler      
GoogleIndex            
AgeofDomain    

which are used to predict whether the entered URL is legitimate or not.
For the UI part, we have used Streamlit
Streamlit is an open-source Python library used for creating interactive web applications for data science and machine learning projects.


Now talking about the future scope:
Sophisticated Machine Learning: Improved ML models, deep learning, NLP, and ensemble methods for better accuracy.
Real-Time Detection: Detect and block phishing sites as they are created.
Behavioral Analysis: Identify unusual behavior on websites.
Contextual Analysis: Analyze website content for inconsistencies and suspicious elements.
URL Analysis: Better detection of obfuscated or malicious URLs.
Browser and DNS Integration: Integrate detection directly into browsers and DNS services.
Threat Intelligence Sharing: Collaborate to quickly identify and block new phishing threats.
User Education: Raise awareness and teach users to recognize and avoid phishing attempts.
Mobile Phishing Detection: Extend detection capabilities to mobile devices.
Multi-Modal Data Fusion: Combine data from multiple sources for better accuracy.
Feature Engineering: Continuously improve data extraction techniques.
Explainable AI: Make AI-driven detection more transparent for users to understand.
Continuous Learning: Adaptive models that dynamically update to new phishing techniques.


