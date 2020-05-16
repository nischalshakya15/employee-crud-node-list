export const getDepartments = {
  tags: ['Departments'],
  summary: 'Get all departments',
  produces: ['application/json'],
  responses: {
    200: {
      description: 'Ok',
      schema: {
        $ref: '#/definitions/Departments',
      },
    },
  },
};

export const postDepartments = {
  tags: ['Departments'],
  summary: 'Create department',
  parameters: [
    {
      in: 'body',
      name: 'body',
      description: 'Department object that need to be added',
      required: true,
      schema: {
        $ref: '#definitions/Departments',
      },
    },
  ],
  responses: {
    201: {
      description: 'Created',
    },
  },
};

export const putDepartments = {
  tags: ['Departments'],
  summary: 'Update an existing department',
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
        $ref: '#definitions/Departments',
      },
    },
  ],
  responses: {
    200: {
      description: 'Ok',
    },
  },
};

export const deleteDepartment = {
  tags: ['Departments'],
  summary: 'Remove an existing department',
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

export const getOneDepartment = {
  tags: ['Departments'],
  summary: 'Find department by ID',
  description: 'Return the single department',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of department to be return',
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

export const departments = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      format: 'int64',
    },
    name: {
      type: 'string',
      format: 'string',
    },
    description: {
      type: 'string',
      format: 'string',
    },
    createdDate: {
      type: 'string',
      format: 'date-time',
    },
    updatedDate: {
      type: 'string',
      format: 'date-time',
    },
  },
};
