const todoListStyles = {
    
    li: {
        cursor: 'pointer',
        position: 'relative',
        padding: '12px 8px 12px 40px',
        // background: '#eee',
        fontSize: '18px',
        // transition: '0.2s',
        listStyleType: 'none',
        // width: '100%',
        // float: 'left',
        // height: '20px'
        marginTop: '5px'
    },

    removeButton: {
        width: '15%',
        border: 'none',
        background: '#cc3300',
        color: '#fff',
        cursor: 'pointer',
        float: 'right',
        position: 'absolute',
        right: '0',
        top: '0',
        padding: '15px 16px ',
    },
    
    edit: {
        position:'absolute',
        float: 'right',
        right: '150px'
    }
}

export default todoListStyles