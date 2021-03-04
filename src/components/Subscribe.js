import React from "react";
import {
  Box,
  Container,
  FormControl,
  TextField,
  Select,
  Paper,
  MenuItem,
  InputLabel,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    marginTop: "50px",
    paddingBottom: "5px",
  },
  description: {
    maxWidth: "400px",
  },
  paper: {
    display: "grid",
    padding: 30,
  },
  formContainer: {
    width: "510px",
    display: "block",
  },
  formControl: {
    marginTop: "20px",
  },
});

const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: "",
        from: "",
        asIndividual: false,
        asCompany: false,
        asInvester: false,
      },
      isValidEmail: true,
      submitMessage: "",
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeFromDropdown = this.handleChangeFromDropdown.bind(this);
    this.handleCheckboxChangeIndividual = this.handleCheckboxChangeIndividual.bind(
      this
    );
    this.handleCheckboxChangeCompany = this.handleCheckboxChangeCompany.bind(
      this
    );
    this.handleCheckboxChangeInvestor = this.handleCheckboxChangeInvestor.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    if (emailRegex.test(event.target.value)) {
      this.setState(
        (previousState, currentProps) => {
          return {
            ...previousState,
            form: {
              ...previousState.form,
              email: event.target.value,
            },
            isValidEmail: true,
          };
        },
        () => {
          console.log(this.state.form.email);
        }
      );
    } else {
      this.setState(
        (previousState, currentProps) => {
          return {
            ...previousState,
            form: {
              ...previousState.form,
              email: event.target.value,
            },
            isValidEmail: false,
          };
        },
        () => {
          console.log(this.state.isValidEmail);
        }
      );
    }
  }

  handleChangeFromDropdown(event) {
    this.setState(
      (previousState, currentProps) => {
        return {
          ...previousState,
          form: {
            ...previousState.form,
            from: event.target.value,
          },
        };
      },
      () => {
        console.log(this.state.form.from);
      }
    );
  }

  handleCheckboxChangeIndividual() {
    this.setState(
      (previousState, currentProps) => {
        return {
          ...previousState,
          form: {
            ...previousState.form,
            asIndividual: !previousState.form.asIndividual,
          },
        };
      },
      () => {
        console.log("asIndividual: " + this.state.form.asIndividual);
      }
    );
  }

  handleCheckboxChangeCompany() {
    this.setState(
      (previousState, currentProps) => {
        return {
          ...previousState,
          form: {
            ...previousState.form,
            asCompany: !previousState.form.asCompany,
          },
        };
      },
      () => {
        console.log("asCompany: " + this.state.form.asCompany);
      }
    );
  }

  handleCheckboxChangeInvestor() {
    this.setState(
      (previousState, currentProps) => {
        return {
          ...previousState,
          form: {
            ...previousState.form,
            asInvester: !previousState.form.asInvester,
          },
        };
      },
      () => {
        console.log("asInvester: " + this.state.form.asInvester);
      }
    );
  }

  handleSubmit() {
    if (this.submitValidation()) {
      console.log("Hihi");
      this.setState((previousState, currentProps) => {
        return {
          ...previousState,
          submitMessage: "Submited. Thank you for your support!",
        };
      });
    }
  }

  submitValidation() {
    if (this.state.form.email === "") {
      this.setState((previousState, currentProps) => {
        return {
          ...previousState,
          submitMessage: "Failed to submit: Email must not be empty",
        };
      });
      return false;
    }
    if (!this.state.isValidEmail) {
      this.setState((previousState, currentProps) => {
        return {
          ...previousState,
          submitMessage: "Failed to submit: Email is invalid",
        };
      });
      return false;
    }
    if (this.state.form.from === "") {
      this.setState((previousState, currentProps) => {
        return {
          ...previousState,
          submitMessage: "Failed to submit: Must select a location",
        };
      });
      return false;
    }
    if (
      this.state.form.asIndividual === false &&
      this.state.form.asCompany === false &&
      this.state.form.asInvester === false
    ) {
      this.setState((previousState, currentProps) => {
        return {
          ...previousState,
          submitMessage:
            "Failed to submit: Must select at least one either as an Individual, a Company, or an Invester",
        };
      });
      return false;
    }

    return true;
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="md" id="subscribe" className={classes.root}>
        <Typography variant="h2">Register your interest</Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="left"
          pt={5}
          mb={6}
          id="features"
        >
          <div className={classes.description}>
            <Typography variant="body1">
              Please let us know if you are interested. Subscribe to make a
              change in our future lifestyle and community.
            </Typography>
          </div>
          <div className={classes.formContainer}>
            <Paper elevation={3} className={classes.paper}>
              <TextField
                required
                id="email"
                label="Email"
                fullWidth
                onChange={this.handleChangeEmail}
                error={!this.state.isValidEmail}
                helperText={this.state.isValidEmail ? "" : "Invalid Email"}
              />
              <FormControl className={classes.formControl}>
                <InputLabel id="country">From *</InputLabel>
                <Select
                  labelId="country"
                  id="from"
                  value={this.state.form.from}
                  onChange={this.handleChangeFromDropdown}
                  fullWidth
                >
                  <MenuItem value={"hk"}>Hong Kong</MenuItem>
                  <MenuItem value={"jp"}>Japan</MenuItem>
                  <MenuItem value={"tw"}>Taiwan</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <FormLabel>As a *</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.form.asIndividual}
                        onChange={this.handleCheckboxChangeIndividual}
                        name="individual"
                      />
                    }
                    label="Individual"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.form.asCompany}
                        onChange={this.handleCheckboxChangeCompany}
                        name="company"
                      />
                    }
                    label="Company"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.form.asInvester}
                        onChange={this.handleCheckboxChangeInvestor}
                        name="investor"
                      />
                    }
                    label="Investor"
                  />
                </FormGroup>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Subscribe
                </Button>
                {this.state.submitMessage}
              </FormControl>
            </Paper>
          </div>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(Subscribe);
