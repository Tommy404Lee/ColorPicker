function Color ({color, selectedColor, setSelectedColor}) {
    
    return (
        <div 
            className = {color === selectedColor ? `${color} selected` : color}
            onClick={() => {setSelectedColor(color)}}
            
        ></div>
    )
  }

  export default Color