import config from "../config/Config";
import firebase from "firebase";

const auth = config.auth;
const db = config.firestore;
const storage = config.storage;
const bucket = storage.app.options_.storageBucket;

export const authedUser = (userData) => {
  // console.log(userData)
  let userId;
  try {
    return new Promise((res, rej) => {
      auth
        .signInWithEmailAndPassword(userData.email, userData.password)
        .then((doc) => {
          console.log(doc.user.uid);
          userId = doc.user.uid;
          return doc.user.getIdToken();
        })
        .then((token) => {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("userId", JSON.stringify(userId));
          setTimeout(() => res(userId), 1000);
        }).catch(err => {
          setTimeout(()=> rej(err), 1000)
        })
    });
  } catch (err) {
    console.log(err);
  }
};




const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  let noImg = "no-img.png";
    try {
      return new Promise((res, rej) => {
        auth.signInWithPopup(googleProvider).then((result) => {
          let credential = result.credential
            console.log(result.user)
      // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.idToken;
          var userId = result.user.uid;
          var user = result.user;
          
         
          localStorage.setItem("token", JSON.stringify( token));
          localStorage.setItem("result", JSON.stringify(userId))
          // db.doc(`users/${userId}`).get().then((doc) => {
          //   if (!doc.exists) {
          //     db.collection("users").doc(userId).set({
          //       email: user.email,
          //       name: user.displayName,
          //       id: userId,
          //       imageUrl: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${noImg}?alt=media`,
          //       plan: "free",
          //       subscribed:false
          //     })
          //   }
          // })
       
          setTimeout(() =>  res(userId), 1000);
        }).catch(err => {
          setTimeout(()=> rej(err), 1000)
        })
      })
    } catch(error){
      console.log(error.message)
    }
}
  
export const signUpWithGoogle = () => {
  let noImg = "no-img.png";
  try {
    return new Promise((res, rej) => {
      auth.signInWithPopup(googleProvider).then((result) => {
        let credential = result.credential
          console.log(result.user)
    // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.idToken;
        var userId = result.user.uid;
        var user = result.user;
       
        localStorage.setItem("token", JSON.stringify( token));
        localStorage.setItem("result", JSON.stringify(userId))
        db.doc(`users/${userId}`).get().then((doc) => {
          if (!doc.exists) {
            db.collection("users").doc(userId).set({
              email: user.email,
              name: user.displayName,
              id: userId,
              imageUrl: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${noImg}?alt=media`,
              plan: "free",
              subscribed:false
            })
          }
        })
     
        setTimeout(() =>  res(userId), 1000);
      }).catch(err => {
        setTimeout(()=> rej(err), 1000)
      })
    })
  } catch(error){
    console.log(error.message)
  }
  }

export const postSurvey = (survey) => {
  const { id, json } = survey
  console.log(survey);
 return new Promise((res, rej) => {
  db.collection("surveys").doc(id).set({
    userId: auth.currentUser.uid,
    id:id,
    createdAt: Date.now(),
    json:json
  })
  //  let data ={userId:auth.currentUser.uid, createdAt: Date.now(), json:survey}
  //  setTimeout(()=> res(dat), 1000)
 }).catch(err => {
    console.log(err)
  })
 
}

export const postSurveyNPSTemplate = (survey) => {
  const { id,title, json } = survey
  console.log(survey);
 return new Promise((res, rej) => {
  db.collection("surveys").doc(id).set({
    userId: auth.currentUser.uid,
    id: id,
    title,
    createdAt: Date.now(),
    json:json
  })
 
 }).catch(err => {
    console.log(err)
  })
 
}


export const postSurveyCustomerFeedbackTemplate = (survey) => {
  const { id,json } = survey
 return new Promise((res, rej) => {
  db.collection("surveys").doc(id).set({
    userId: auth.currentUser.uid,
    id: id,
    createdAt: Date.now(),
    json:json
  })
 
 }).catch(err => {
    console.log(err)
  })
 
}

export const postSurveyResearchTemplate = (survey) => {
  const { id, json } = survey
 return new Promise((res, rej) => {
  db.collection("surveys").doc(id).set({
    userId: auth.currentUser.uid,
    id: id,
    createdAt: Date.now(),
    json:json
  })
 
 }).catch(err => {
    console.log(err)
  })
 
}



export const postSurveySatisfactionTemplate = (survey) => {
  const { id, json } = survey
 return new Promise((res, rej) => {
  db.collection("surveys").doc(id).set({
    userId: auth.currentUser.uid,
    id: id,
    createdAt: Date.now(),
    json:json
  })
 
 }).catch(err => {
    console.log(err)
  })
 
}


export const getSingleSurvey = (id) => {
  return new Promise((res, rej) => {
    db.collection("surveys").doc(id).get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc)
        setTimeout(()=> res({id:doc.id, ...doc.data()}), 1000)
      }
    })
  })
}



export const getSingleAnalysis = (id) => {
  return new Promise((res, rej) => {
    db.collection("reports").doc(id).get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc)
        setTimeout(()=> res({id:doc.id, ...doc.data()}), 1000)
      }
    })
  })
}




export const postResponse = (item, id, userId) => {
  console.log(id)
  return new Promise((res, rej) => {
    db.collection("reports").doc().set({
      id: id,
      userId: userId,
      createdAt: Date.now(),
      questions: item 
    })
    setTimeout(() => res({ message: "response recorded" }), 1000)
  })
}

export const postTemplateResponse = (item, name) => {
  return new Promise((res, rej) => {
    db.collection("reports").doc().set({
      type:name,
      userId: auth.currentUser.uid,
      createdAt: Date.now(),
      questions: item
    })
   
    setTimeout(() => res({ message: "response recorded" }), 1000)
  })
}


export const signUp = (credentials) => {
  let noImg = "no-img.png";
  let userId = "";
  try {
    return new Promise((res, rej) => {
      auth
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((doc) => {
          userId = doc.user.uid;
          return doc.user.getIdToken();
        })
        .then((token) => {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("userId", JSON.stringify(userId));
        })
        .then(() => {
          db.collection("users")
            .doc(userId)
            .set({
              imageUrl: `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${noImg}?alt=media`,
              email: credentials.email,
              name: credentials.name,
              plan: "free",
              subscribed:false,
              id: userId,
            });

          setTimeout(() => res(userId), 1000);
        }).catch(err => {
          setTimeout(()=>rej(err), 1000)
        })
    });
  } catch (err) {
    return err.message;
  }
};


export const getAllSurveys = (id) => {
  let surveys = {};
  try {
    return new Promise((res, rej) => {
      const query = db.collection("surveys").where('userId', "==", id)
        query.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            surveys[doc.id] = { id: doc.id, ...doc.data() };
          });
        });
          console.log(surveys)
      setTimeout(() => res(surveys), 1000);
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateSurvey = (id, survey) => {
  
  return new Promise((res, rej) => {
    
    db.doc(`surveys/${id}`).update({
      userId: auth.currentUser.uid,
      createdAt: Date.now(),
      json: survey,
    })
    setTimeout(()=> res({message:" form updated" }), 1000)
  })
}


export const actionGetReports = (id) => {
  let reports = {};
  try {
    return new Promise((res, rej) => {
      db.collection("surveys").get().then((querySelector) => {
        querySelector.forEach(doc => {
          if (doc.data().userId === id) {
             db.collection("reports").where("id", "==", doc.id)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((pos) => {
                reports[pos.id] = { id: pos.id, questiondId: doc.id, ...pos.data() };
              });
            });
          }
        })
      })
     

      setTimeout(() => res(reports), 1000);
    });
  } catch (err) {
    console.log(err);
  }
};




export const getCustomerFeedback = (id) => {
  let feedback;
  
  try {
    return new Promise((res, rej) => {
      db.collection("customer-feedback").get().then((querySelector) => {
        querySelector.forEach(doc => {
          feedback= { userId: id, json: doc.data(),  }
        })
      })

      setTimeout(() => res(feedback), 1000)
    }).catch(err => {
      console.log(err)
    })
  } catch(err) {
    console.log(err)
  }
}


export const getCustomerSatisfaction = (id) => {
  let satisfaction 
  return new Promise((res, rej) => {
    db.collection("customer-satisfaction").get().then((querySelector) => {
      querySelector.forEach(doc => {
        satisfaction= {userId:id, json:doc.data(), questionId: doc.id }
      })
    })

    setTimeout(()=>res(satisfaction), 1000)
  }).catch(err => {
    console.log(err)
  })
}


export const npsQuestion = (id) => {
  let nps;
  return new Promise((res, rej) => {
    db.collection("nps-questions").get().then((querySelector) => {
      querySelector.forEach(doc => {
        nps = {userId:id, json:doc.data(), questionId: doc.id }
      })
    })

    setTimeout(()=>res(nps), 1000)
  }).catch(err => {
    console.log(err)
  })
}


export const productMarket = (id) => {
  let product;
  return new Promise((res, rej) => {
    db.collection("product-market").get().then((querySelector) => {
      querySelector.forEach(doc => {
        product = {userId:id, json:doc.data(), questionId: doc.id }
      })
    })

    setTimeout(()=>res(product), 1000)
  }).catch(err => {
    console.log(err)
  })
}


export const getInitialData = (id) => {
  try {
    return Promise.all([
      actionGetReports(id),
      getAllSurveys(id),
    ]).then(([reports, surveys,]) => ({
      reports,
      surveys,
    }))
  } catch (err) {
    console.log(err)
  }
};


export const getTemplateForms = (id) => {
  return  Promise.all([
    getCustomerFeedback(id),
    getCustomerSatisfaction(id),
    npsQuestion(id),
    productMarket(id)
  ]).then(([feedback, satisfaction, nps, product]) => ({
    feedback,
    satisfaction,
    nps,
    product
  }))
}


export const getReportAnalysis = (id) => {
  let result=[]
  try {
    let data;
    return new Promise((res, rej) => {
      const query = db.collection("reports")
        query.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().id === id) {
              result=[...result, doc.data()]
            }
          });
        });
          console.log(result)
      setTimeout(() => res(result), 1000);
    });
  } catch (err) {
    console.log(err);
  }
}


export const deleteDoc = (id) => {
  return new Promise((res, rej) => {
    let document = db.collection("surveys").doc(id).delete()
    document.then(() => {
      setTimeout(()=> res(id), 1000)
    })
 
  })
}
