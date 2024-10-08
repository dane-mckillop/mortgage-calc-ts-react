import { Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import Fee from "../interfaces/Fees";


interface DynamicFeesProps {
    fields: Fee[];
    changeFields: (value: Fee[]) => void;
    nextId: number;
    changeNextId: (value: number) => void;
    changeFeesTotal: (value: number) => void;
}

const DynamicFees: React.FC<DynamicFeesProps> = (props) => {
    const fields: Fee[] = props.fields;
    const nextId: number = props.nextId;
    const changeFields: (value: Fee[]) => void = props.changeFields;
    const changeNextId: (value: number) => void = props.changeNextId;
    const changeFeesTotal: (value: number) => void = props.changeFeesTotal;

    const handleAddField = () => {
        const newField: Fee = { id: nextId, fee: '' };
        changeFields([...fields, newField]);
        changeNextId(nextId + 1);
    };

    const handleRemoveField = (id: number) => {
        changeFields(fields.filter(field => field.id !== id));
    };

    const handleChange = (id: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newFields = fields.map(field => {
            if (field.id === id) {
                return { ...field, fee: event.target.value };
            }
            return field;
        });
        changeFields(newFields);
    };

    //Updates the totalFees when a fee field is modified.
    useEffect(() => {
        const sum = fields.reduce((acc, field) => acc + (parseFloat(field.fee) || 0), 0);
        changeFeesTotal(sum);
    }, [fields]);

    return (
        <Grid container spacing={2}>
            {fields.map(field => (
                <Grid item key={field.id} xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Fee"
                        variant="outlined"
                        value={field.fee}
                        onChange={(event) => handleChange(field.id, event)}
                    />
                    <Button color="error" onClick={() => handleRemoveField(field.id)}>
                        Remove
                    </Button>
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button variant="contained" onClick={handleAddField}>
                    Add Fee
                </Button>
            </Grid>
        </Grid>
    );
};

export default DynamicFees;