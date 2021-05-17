import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './Item.module.css';


const Item = ({ value, isDone, classes, onClickDone }) => (<div className = {
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>
    <Checkbox
        defaultChecked
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={() => onClickDone(isDone)}
     />
     {value}
     <Tooltip title="Delete">
        <IconButton aria-label="delete" color="secondary">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
</div>);

export default Item;
