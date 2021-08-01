// import { useEffect } from "react";


// const useScript = url => {
//     useEffect(() => {
//       const script = document.createElement('script');
//       script.src = url;
//       script.async = true;
  
//       document.body.appendChild(script);
  
//       return () => {
//         document.body.removeChild(script);
//       }
//     }, [url]);

// };
  

// export default useScript;


import React,{Component} from "react"

class UseScript extends Component {
    componentDidMount() {
    const { id } = this.props;
        const script = document.createElement("script"); script.async = true; script.src = `http://localhost:3000/create/view/8miw4kze5sb654peyjo68 `;
        this.div.appendChild(script);
    }
    render() {
    return (
      <div ref={el => (this.div = el)}>     <h1>Hello react</h1>
        {/* Script is inserted here */}
      </div>
    );
  }
}

export default UseScript;