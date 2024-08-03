from flask import Flask, jsonify, render_template
import sqlite3
import pandas as pd
from sqlalchemy import create_engine

df = pd.read_csv("Student_Performance_Data.csv") 
df_departments = pd.read_csv("Department_Information.csv")
df_students = pd.read_csv("Student_Counceling_Information.csv")
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-datachart')

def get_datachart():
    bins = [0, 50, 80, 100]  # Define the bin edges for degree ranges
    labels = ['0-50', '51-80', '81-100']  # Labels for the degree ranges

    # Use pandas cut function to categorize Marks into the defined bins
    df['Degree_Range'] = pd.cut(df['Marks'], bins=bins, labels=labels, include_lowest=True)

    # Count occurrences of each degree range
    data_grouped = df['Degree_Range'].value_counts().sort_index()

    data = []
    for i in range(len(data_grouped.index)):
        dict_d = {}
        dict_d['country'] = data_grouped.index[i]
        dict_d['sales'] = int(data_grouped.values[i])
        data.append(dict_d)

    return jsonify(data)
@app.route('/get-datachart2')
def get_datachart2():
    df_departments = pd.read_csv("Department_Information.csv")
    df_students = pd.read_csv("Student_Counceling_Information.csv")

# Merge the DataFrames on the department IDs
    merged_df = pd.merge(df_students, df_departments, left_on='Department_Choices', right_on='Department_ID')

# Count the occurrences of each department
    department_counts = merged_df['Department_Name'].value_counts()

# Prepare data for the bar chart
    data_bar = []
    for department, count in department_counts.items():
        data_bar.append({'department': department, 'count': count})

    return jsonify(data_bar)


@app.route('/get-datachart3')
def get_datachart3():
    try:
        df = pd.read_csv('Student_Performance_Data_Wide_Version.csv')
        df_average = df.groupby('Semster_Name').mean().reset_index()
        series_data = df_average.to_dict(orient='records')
        return jsonify(series_data)
    except Exception as e:
        print(e)
        return str(e), 500


@app.route('/get-datachart4')
def get_datachart4():
    # Read CSV
    df = pd.read_csv("Student_Performance_Data_Wide_Version.csv")

    # Replace empty strings with NaN
    df.replace('', pd.NA, inplace=True)

    # Convert score columns to numeric and calculate the average
    score_columns = df.columns[2:]
    df[score_columns] = df[score_columns].apply(pd.to_numeric)
    df['Average'] = df[score_columns].mean(axis=1)

    # Convert semester names to numeric values (Sem_1 -> 1, Sem_2 -> 2, etc.)
    df['Semester_Number'] = df['Semster_Name'].str.extract('(\d+)').astype(int)

    # Prepare the data for the scatter plot
    scatter_data = df[['Semester_Number', 'Average']].to_dict(orient='records')
    df['Std_Dev'] = df[score_columns].std(axis=1)

    # Prepare the data for the scatter plot
    scatter_data = df[['Semester_Number', 'Average', 'Std_Dev']].to_dict(orient='records')


    return jsonify(scatter_data)






if __name__ == '__main__':
    app.run(debug=True)
