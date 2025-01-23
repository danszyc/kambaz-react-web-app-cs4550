export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="">Select Assignment Group</option>
              <option value="group1">Group 1</option>
              <option value="group2">Group 2</option>
              <option value="group3">Group 3</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right">
            <label htmlFor="wd-display-grade-as">Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="raw">Raw</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="in-person">In-person</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right">
            <label>Online Entry Options</label>
          </td>
          <td>
            <label>
              <input type="checkbox" id="wd-text-entry" />
              Text Entry
            </label>
            <br />
            <label>
              <input type="checkbox" id="wd-website-url" />
              Website URL
            </label>
            <br />
            <label>
              <input type="checkbox" id="wd-media-recordings" />
              Media Recordings
            </label>
            <br />
            <label>
              <input type="checkbox" id="wd-student-annotation" />
              Student Annotation
            </label>
            <br />
            <label>
              <input type="checkbox" id="wd-le-upload" />
              File Uploads
            </label>
          </td>
        </tr>
        <tr>
          <td align="right">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <input id="wd-assign-to" type="text" value="everyone" />
          </td>
        </tr>
        <tr>
          <td align="right">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available From</label>
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>

              <tr>
                <td>
                  <input id="wd-available-from" type="date" />
                </td>
                <td>
                  <input id="wd-available-until" type="date" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
