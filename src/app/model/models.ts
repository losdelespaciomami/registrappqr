export interface UserI {
    uid: string;
    Email: string;
    Nombre: string;
    Rol: 'Alumno' | 'Profesor';
    Rut: string;
}