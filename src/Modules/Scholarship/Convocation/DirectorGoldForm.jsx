import React, { useState } from "react";
import {
    Button,
    TextInput,
    Grid,
    Textarea,
    FileButton,
    Group,
    Container,
    Paper,
    Title,
} from "@mantine/core";

export default function DirectorGoldForm() {
    const [formData, setFormData] = useState({
        award_id: "",
        student: "",
        date: "",
        justification: "",
        correspondence_address: "",
        status: "",
        nearest_policestation: "",
        nearest_railwaystation: "",
        financial_assistance: "",
        grand_total: "",
        academic_achievements: "",
        social: "",
        corporate: "",
        hall_activities: "",
        gymkhana_activities: "",
        institute_activities: "",
        counselling_activities: "",
        other_activities: "",
        science_inside: "",
        science_outside: "",
        games_inside: "",
        games_outside: "",
        cultural_inside: "",
        cultural_outside: "",
        Marksheet: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (file) => {
        setFormData((prev) => ({ ...prev, Marksheet: file }));
    };

    return (
        <Container size="lg">
            <Paper radius="md" p="sm">
                <Title order={2} mb="lg">
                    Director's Gold Medal Application Form
                </Title>
                <form>
                    <Grid gutter="lg">
                        {/* Basic Information */}
                        <Grid.Col span={6}>
                            <TextInput
                                label="Award ID"
                                name="award_id"
                                type="number"
                                value={formData.award_id}
                                onChange={handleChange}
                                placeholder="Enter Award ID"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Student ID"
                                name="student"
                                type=""
                                value={formData.student}
                                onChange={handleChange}
                                placeholder="Enter Student ID"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                placeholder="Enter Status"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Nearest Police Station"
                                name="nearest_policestation"
                                value={formData.nearest_policestation}
                                onChange={handleChange}
                                placeholder="Enter Nearest Police Station"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Nearest Railway Station"
                                name="nearest_railwaystation"
                                value={formData.nearest_railwaystation}
                                onChange={handleChange}
                                placeholder="Enter Nearest Railway Station"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Grand Total Amount"
                                name="grand_total"
                                type="number"
                                value={formData.grand_total}
                                onChange={handleChange}
                                placeholder="Enter Grand Total Amount"
                            />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Textarea
                                label="Justification"
                                name="justification"
                                value={formData.justification}
                                onChange={handleChange}
                                placeholder="Enter Justification"
                                minRows={3}
                            />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Textarea
                                label="Correspondence Address"
                                name="correspondence_address"
                                value={formData.correspondence_address}
                                onChange={handleChange}
                                placeholder="Enter Correspondence Address"
                                minRows={3}
                            />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Textarea
                                label="Financial Assistance"
                                name="financial_assistance"
                                value={formData.financial_assistance}
                                onChange={handleChange}
                                placeholder="Describe Financial Assistance"
                                minRows={3}
                            />
                        </Grid.Col>

                        {/* Achievements Section */}
                        {[
                            "academic_achievements",
                            "social",
                            "corporate",
                            "hall_activities",
                            "gymkhana_activities",
                            "institute_activities",
                            "counselling_activities",
                            "other_activities",
                            "science_inside",
                            "science_outside",
                            "games_inside",
                            "games_outside",
                            "cultural_inside",
                            "cultural_outside",
                        ].map((field) => (
                            <Grid.Col span={6} key={field}>
                                <Textarea
                                    label={field.replace(/_/g, " ")}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    placeholder={`Enter ${field.replace(/_/g, " ")}`}

                                    minRows={2}
                                />
                            </Grid.Col>
                        ))}

                        {/* Marksheet Upload at the Bottom */}
                        <Grid.Col span={12}>
                            <FileButton onChange={handleFileChange} accept="application/pdf">
                                {(props) => (
                                    <Button {...props} fullWidth>
                                        Upload Marksheet (PDF)
                                    </Button>
                                )}
                            </FileButton>
                            {formData.Marksheet && (
                                <TextInput
                                    value={formData.Marksheet.name}
                                    readOnly
                                    mt="sm"
                                    label="Uploaded File"
                                />
                            )}
                        </Grid.Col>
                    </Grid>

                    <Group position="right" mt="xl">
                        <Button type="submit" color="blue">
                            Submit
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}