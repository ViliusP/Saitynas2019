import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FilterList from '@material-ui/icons/FilterList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(theme => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));


export default function ToggleRequestStatus() {
  const [filters, setFilters] = React.useState(() => ['bold']);

  const classes = useStyles();

  const handleFormat = (event, newFilter) => {
    setFilters(newFilter);
  };

	return (
		<div className={classes.toggleContainer}>
			<ToggleButtonGroup value={filters} onChange={handleFormat} arial-label="request status">
				<ToggleButton value="pending" aria-label="pending">
					Pending
				</ToggleButton>
				<ToggleButton value="accepted" aria-label="accepted">
					Accepted
				</ToggleButton>
				<ToggleButton value="rejected" aria-label="rejected">
					Rejected
				</ToggleButton>
				<ToggleButton value="color" aria-label="color" disabled>
					<FilterList />
				</ToggleButton>
			</ToggleButtonGroup>
		</div>
	)
}
