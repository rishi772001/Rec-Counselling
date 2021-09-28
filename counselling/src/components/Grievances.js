import React, { Component } from 'react';

class Grievances extends Component {
    render() {
        return (
            <div>
                <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Grievances
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Hostel Issues"
                    name="hostelIssues"
                    required
                    defaultValue={this.state.hostelIssues}
                    fullWidth
                    id="Hostel Issues"
                    label="Hostel Issues"
                    autoFocus
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="transportIssues"
                    label="Transport Isssues"
                    defaultValue={this.state.transportIssue}
                    name="Transport Issues"
                    autoComplete="Transport Issues"
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="canteenIssues"
                    label="Canteen Issues"
                    defaultValue={this.state.canteenIssues}
                    name="Canteen Issues"
                    autoComplete="Canteen Issues"
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="academicIssues"
                    label="Academic Issues"
                    defaultValue={this.state.handleIssue}
                    type="text"
                    id="sem"
                    autoComplete="Academic Issues"
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="facultyRemarks"
                    label="Faculty Remarks"
                    defaultValue={this.state.facultyRemarks}
                    type="text"
                    id="Faculty Remarkst"
                    autoComplete="Faculty Remarks"
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="otherIssues"
                    label="Other Issues"
                    defaultValue={this.state.otherIssues}
                    type="text"
                    id="otherIssues"
                    autoComplete="Other Issue"
                    onChange={this.handleChangeMain}
                  />
                </Grid>    
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
            </div>
        );
    }
}

export default Grievances;