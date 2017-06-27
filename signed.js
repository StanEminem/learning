var SignedXml = require('xml-crypto').SignedXml	  
      , fs = require('fs')
 
    var xml = "<library>" +
                "<book>" +
                  "<name>Harry Potter</name>" +
                "</book>" +
              "</library>"
 
    var sig = new SignedXml()
    sig.addReference("//*[local-name(.)='book']")    
    sig.signingKey = fs.readFileSync("client.pem")
    sig.computeSignature(xml)
    fs.writeFileSync("signed.xml", sig.getSignedXml())
