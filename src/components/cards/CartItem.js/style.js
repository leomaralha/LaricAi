import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
  root: {
    position: "relative",
    margin: theme.spacing(1),
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
    overflow: "hidden",
    maxHeight: "100px",
  },

  textContent: {
    textOverflow: "ellipsis",
    lineHeight: "1.30",
    maxWidth: "100%",
    paddingLeft: '4px'
  },

  addRemoveBtn: {
    borderRadius: '50%',
    border: '1px solid',
    width: 40,
    minWidth: 40,
    height: 40,
    '& $label': {
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    },
    '&:hover': {
      '& $label': {
        transform: 'scale(1.3)',
      },
    },
  },

  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    display: "block",
    objectFit: 'cover',
    textAlign: 'center',
    textIndent: '10000px',
  },

  imageContainer:{
    height: '96px',
    width: '96px',
    display: 'flex',
    position: 'relative',
    fontSize: '1.25rem',
    alignItems: 'center',
    flexShrink: '0',
    justifyContent: 'center',
  },

  cardTitle:{
    ...theme.mixins.cardTitle

  },
  cardDescription:{
    ...theme.mixins.cardDescription
  },

  label: {},
}))