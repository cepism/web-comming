var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
    opacity: [0.7, 0.6],
    isPausedWhenNotInView: false,
    states : {
        "default-state": {
            gradients: [
                ['#ef3f3f', '#f3f74a'],
                ['#33FFCC','#673ab7'],
                ['#FF33CC','#FFCC33'],
                ['#D48911','#89D411']
                
                
            ]
        }
    }
});