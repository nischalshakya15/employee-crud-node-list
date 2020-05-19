export const getEmployees = {
  tags: ['Employees'],
  summary: 'Get all employees',
  produces: ['application/json'],
  responses: {
    200: {
      description: 'Ok',
      schema: {
        $ref: '#/definitions/Employees'
      }
    }
  }
};

export const postEmployees = {
  tags: ['Employees'],
  summary: 'Create employee',
  parameters: [
    {
      in: 'body',
      name: 'body',
      description: 'Employee object that need to be added',
      required: true,
      schema: {
        $ref: '#definitions/Employees',
      },
    },
  ],
  responses: {
    201: {
      description: 'Created',
    },
  },
};

export const putEmployees = {
  tags: ['Employees'],
  summary: 'Update an existing employee',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      type: 'integer',
      format: 'int64',
    },
    {
      in: 'body',
      name: 'body',
      required: true,
      schema: {
        $ref: '#definitions/Employees',
      },
    },
  ],
  responses: {
    200: {
      description: 'Ok',
    },
  },
};

export const deleteEmployee = {
  tags: ['Employees'],
  summary: 'Remove an existing employee',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      type: 'integer',
      format: 'int64',
    },
  ],
  responses: {
    200: {
      description: 'OK',
    },
  },
};

export const getOneEmployee = {
  tags: ['Employees'],
  summary: 'Find employee by ID',
  description: 'Return the single employee',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of employee to be return',
      required: true,
      type: 'integer',
      format: 'int64',
    },
  ],
  responses: {
    200: {
      description: 'Ok',
    },
  },
};

export const employees = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      format: 'int64'
    },
    firstName: {
      type: 'string',
      format: 'string'
    },
    lastName: {
      type: 'string',
      format: 'string'
    },
    salary: {
      type: 'number',
      format: 'number'
    },
    department: {
      $ref: '#definitions/Departments'
    }
  }
};
