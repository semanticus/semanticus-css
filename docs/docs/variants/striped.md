<script setup>
const tableHtml = `<table class="striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>Editor</td>
    </tr>
    <tr>
      <td>Bob Wilson</td>
      <td>bob@example.com</td>
      <td>Viewer</td>
    </tr>
    <tr>
      <td>Alice Brown</td>
      <td>alice@example.com</td>
      <td>Editor</td>
    </tr>
  </tbody>
</table>
`;
</script>

# Striped Variant

The `.striped` class applies alternating row background colors to tables, making it easier to scan across rows in data-dense tables.

## Tables

Apply `.striped` to `<table>` elements to enable zebra-striping on the table body rows.

<HtmlPreviewer :code="tableHtml" />

<!-- markdownlint-enable MD033 -->
