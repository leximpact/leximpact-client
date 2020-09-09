import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  message?: string;
}

const ErrorSnackbar = ({ message }: Props) => (
  <Snackbar
    action={[
      <IconButton key="close" color="inherit" onClick={() => {}}>
        <CloseIcon />
      </IconButton>,
    ]}
    anchorOrigin={{
      horizontal: "center",
      vertical: "bottom",
    }}
    autoHideDuration={6000}
    message="Cette adresse ne fonctionne pas, veuillez réessayer."
    open={Boolean(message)}
    onClose={() => {}}
  />
);

export default ErrorSnackbar;
